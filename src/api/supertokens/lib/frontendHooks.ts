import { userDetailsLSkey } from '../../../store/models'
import automatoApi from '../../automato/client'

export const postSigninFrontendHook = async (supertokensId: string) => {
  try {
    // await new Promise(r => setTimeout(r, 5000))
    const userDetails = await automatoApi.getUserDetails(supertokensId)
    localStorage.setItem(userDetailsLSkey, JSON.stringify(userDetails))
    // store.set(userDetailsLSkey, userDetails)
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const postSignupFrontendHook = async (supertokensId: string) => {
  try {
    // await new Promise(r => setTimeout(r, 5000))
    const userDetails = await automatoApi.getUserDetails(supertokensId)
    localStorage.setItem(userDetailsLSkey, JSON.stringify(userDetails))
    // store.set(userDetailsLSkey, userDetails)
  } catch (err) {
    console.error(err)
    throw err
  }
}
