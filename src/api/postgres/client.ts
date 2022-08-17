/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sequelize, ModelCtor, Model } from 'sequelize'
import pg from 'pg'
import crypto from 'node:crypto'
import { UserDetails } from '../../store/models'
import migration_1_init from './migrations/1_init_models'

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
  connectionIsEnsured: boolean

  constructor(c: PostgresConstructor) {
    this.client = new Sequelize('automato', c.username, c.password, {
      host: c.host,
      port: Number(c.port),
      dialect: 'postgres',
      dialectModule: pg,
    })

    this.connectionIsEnsured = false

    this.models = this.defineModels()
  }

  async ensureConnection() {
    if (this.connectionIsEnsured) return
    try {
      // Test connection
      await this.client.authenticate()

      // synchronise all models
      await this.client.sync()

      console.log(
        'Connection to postgres DB has been established successfully.'
      )

      this.connectionIsEnsured = false
    } catch (error) {
      console.error('Unable to connect to the postgres DB:', error)
      throw error
    }
  }

  private defineModels() {
    const User = this.client.define(
      migration_1_init.userModel.name,
      migration_1_init.userModel.definition
    )

    const VerificationCode = this.client.define(
      migration_1_init.verificationCodeModel.name,
      migration_1_init.verificationCodeModel.definition
    )

    return {
      User,
      VerificationCode,
    }
  }

  async insertUser(userId: string) {
    await this.ensureConnection()

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
    await this.ensureConnection()

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

  async activateAccount(
    supertokensId: string,
    activationCode: string
  ): Promise<boolean> {
    try {
      await this.ensureConnection()

      const res = await this.models.VerificationCode.findOne({
        where: { userId: supertokensId, code: activationCode, used: false },
      })
      if (res === null) return false

      await this.models.VerificationCode.update(
        {
          used: true,
        },
        { where: { userId: supertokensId, code: activationCode } }
      )

      await this.models.User.update(
        {
          activeAccount: true,
        },
        { where: { supertokensId } }
      )

      return true
    } catch (err) {
      console.error(err)
      throw new Error('Error activating account')
    }
  }

  async addPinpointProjectIdToAccount(
    supertokensId: string,
    pinpointProjectId: string
  ): Promise<boolean> {
    try {
      await this.ensureConnection()

      const [affectedCount] = await this.models.User.update(
        {
          pinpointProjectId,
        },
        { where: { supertokensId, activeAccount: true } }
      )

      return affectedCount > 0
    } catch (err) {
      console.error(err)
      throw new Error('Error activating account')
    }
  }
}

const generateRandomCode = (): string => {
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
