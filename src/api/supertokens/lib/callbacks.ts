import postgres from '../../postgres/client'

const postSignupHook = async (userId: string) => {
  postgres.insertUser(userId)
}

const supertokensHooks = {
  postSignupHook,
}

export default supertokensHooks
