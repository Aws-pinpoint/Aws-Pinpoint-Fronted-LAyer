import postgres from '../../postgres/client'

export const postSignupBackendHook = async (userId: string) => {
  try {
    await postgres.insertUser(userId)
  } catch (err) {
    console.error(err)
    throw err
  }
}
