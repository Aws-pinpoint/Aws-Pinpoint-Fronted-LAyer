import postgres from '../client'

const MIGRATION_NAME = '1_init'

export const runMigration = () => {
  console.log(`🐘 Starting ${MIGRATION_NAME} migration`)
  postgres.client.sync({ force: true })
  console.log(`🐘 Finished ${MIGRATION_NAME} migration`)
}
