import ThirdPartyEmailPasswordReact from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import SessionReact from 'supertokens-auth-react/recipe/session'
import { appInfo } from './appInfo'
import {
  postSigninFrontendHook,
  postSignupFrontendHook,
} from '../lib/frontendHooks'
import { Mutex } from 'async-mutex'

const mutex = new Mutex()

export const frontendConfig = () => {
  return {
    appInfo,
    recipeList: [
      ThirdPartyEmailPasswordReact.init({
        onHandleEvent: async context => {
          if (context.action === 'SESSION_ALREADY_EXISTS') {
            // ~
          } else if (context.action === 'SUCCESS') {
            const { id } = context.user
            if (context.isNewUser) {
              // Sign up

              // lock mutex so that the postSignupFrontendHook can run fully
              // and not be cancelled by redirection
              await mutex.runExclusive(async () => {
                await postSignupFrontendHook(id)
              })
            } else {
              // Sign in

              // lock mutex so that the postSigninFrontendHook can run fully
              // and not be cancelled by redirection
              await mutex.runExclusive(async () => {
                await postSigninFrontendHook(id)
              })
            }
          }
        },
        getRedirectionURL: async () => {
          // wait for the mutex to be released so that we know that the
          // postSigninFrontendHook has finished
          await mutex.waitForUnlock()

          // return undefined to let the default behaviour play out
          return undefined
        },
        signInAndUpFeature: {
          /* providers: [
            ThirdPartyEmailPasswordReact.Google.init(),
            ThirdPartyEmailPasswordReact.Facebook.init(),
            ThirdPartyEmailPasswordReact.Github.init(),
            ThirdPartyEmailPasswordReact.Apple.init(),
          ], */
        },
      }),
      SessionReact.init(),
    ],
  }
}
