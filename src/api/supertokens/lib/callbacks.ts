import postgres from '../../postgres/client'

const postSignupHook = async (userId: string) => {
  try {
    // await postgres.ensureConnection()
    await postgres.insertUser(userId)
  } catch (err) {
    console.error(err)
    throw err
  }
}

const supertokensHooks = {
  postSignupHook,
}

export default supertokensHooks
