/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize'

const sequelize = new Sequelize(`postgres://user:pass@example.com:5432/dbname`)

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

  // constructor() {}

  public static async constructorAsync(c: PostgresConstructor) {
    const me = new Postgres()

    me.client = new Sequelize(
      `postgres://${c.username}:${c.password}@${c.host}:${c.port}/automato`
    )

    // Test connection
    await me.testConnection()

    me.models = me.defineModels()

    // synchronise all models
    await sequelize.sync({ force: true })

    return me
  }

  async testConnection() {
    try {
      await sequelize.authenticate()
      console.log(
        'Connection to postgres DB has been established successfully.'
      )
    } catch (error) {
      console.error('Unable to connect to the postgres DB:', error)
    }
  }

  defineModels() {
    const User = this.client.define('user', {
      supertokensId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      aciveAccount: {
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
    const code = generateRandomCode
    await this.models.VerificationCode.create({
      code,
      userId,
    })
  }
}

const generateRandomCode = (): string => {
  const crypto = new Crypto()
  const a = new Uint8Array(32)
  crypto.getRandomValues(a)
  return Buffer.from(a).toString('base64')
}

const postgres = await Postgres.constructorAsync({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
})

export default postgres
