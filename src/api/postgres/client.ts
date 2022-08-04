/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize'
import crypto from 'node:crypto'
import { UserDetails } from '../../store/models'

interface PostgresConstructor {
  username: string
  password: string
  host: string
  port: string
}

interface Models {
  User: ModelCtor<Model<any, any>>
  VerificationCode: ModelCtor<Model<any, any>>
}

class Postgres {
  client: Sequelize
  models: Models

  constructor(c: PostgresConstructor) {
    this.client = new Sequelize(
      `postgres://${c.username}:${c.password}@${c.host}:${c.port}/automato`
    )

    this.models = this.defineModels()
  }

  async ensureConnection() {
    try {
      // Test connection
      await this.client.authenticate()

      // synchronise all models
      await this.client.sync({ force: true })

      console.log(
        'Connection to postgres DB has been established successfully.'
      )
    } catch (error) {
      console.error('Unable to connect to the postgres DB:', error)
      throw error
    }
  }

  private defineModels() {
    const User = this.client.define('user', {
      supertokensId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      activeAccount: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    })

    const VerificationCode = this.client.define('verification_code', {
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      used: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    })

    return {
      User,
      VerificationCode,
    }
  }

  async insertUser(userId: string) {
    //insert user
    await this.models.User.create({
      supertokensId: userId,
    })

    //insert verification code (insecure for now)
    //TODO: encrypt code and store it in the database
    const code = generateRandomCode()
    await this.models.VerificationCode.create({
      code,
      userId,
    })
  }

  async getUserBySupertokensId(supertokensId: string): Promise<UserDetails> {
    const res = await this.models.User.findOne({
      where: {
        supertokensId,
      },
    })
    if (res === null) return null

    return {
      id: res.getDataValue('id'),
      supertokensId: res.getDataValue('supertokensId'),
      activeAccount: res.getDataValue('activeAccount'),
    } as UserDetails
  }
}

const generateRandomCode = (): string => {
  // const crypto = new Crypto()
  // const crypto = new Crypto()
  // const a = new Uint8Array(32)
  const rb = crypto.randomBytes(32)
  return Buffer.from(rb).toString('base64')
}

const postgres = new Postgres({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
})

export default postgres
