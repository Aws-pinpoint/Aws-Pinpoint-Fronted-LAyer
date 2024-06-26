import ThirdPartyEmailPasswordNode from 'supertokens-node/recipe/thirdpartyemailpassword'
import SessionNode from 'supertokens-node/recipe/session'
import Dashboard from 'supertokens-node/recipe/dashboard'
import { appInfo } from './appInfo'
import { TypeInput } from 'supertokens-node/types'
import { postSignupBackendHook } from '../lib/backendHooks'

export const backendConfig = (): TypeInput => {
  return {
    framework: 'express',
    supertokens: {
      connectionURI: process.env.SUPERTOKENS_URL,
    },
    appInfo,
    recipeList: [
      Dashboard.init({ apiKey: 'ABC' }),
      ThirdPartyEmailPasswordNode.init({
        override: {
          apis: originalImplementation => {
            return {
              ...originalImplementation,
              // override the email password sign up API
              emailPasswordSignUpPOST: async function (input) {
                if (
                  originalImplementation.emailPasswordSignUpPOST === undefined
                ) {
                  throw Error('Should never come here')
                }

                // TODO: some pre sign up logic

                const response =
                  await originalImplementation.emailPasswordSignUpPOST(input)

                if (response.status === 'OK') {
                  // TODO: some post sign up logic
                  postSignupBackendHook(response.user.id)
                }

                return response
              },
            }
          },
        },
        providers: [
          // We have provided you with development keys which you can use for testsing.
          // IMPORTANT: Please replace them with your own OAuth keys for production use.
          ThirdPartyEmailPasswordNode.Google({
            clientId:
              '1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com',
            clientSecret: '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',
          }),
          ThirdPartyEmailPasswordNode.Github({
            clientId: '467101b197249757c71f',
            clientSecret: 'e97051221f4b6426e8fe8d51486396703012f5bd',
          }),
          ThirdPartyEmailPasswordNode.Apple({
            clientId: '4398792-io.supertokens.example.service',
            clientSecret: {
              keyId: '7M48Y4RYDL',
              privateKey:
                '-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgu8gXs+XYkqXD6Ala9Sf/iJXzhbwcoG5dMh1OonpdJUmgCgYIKoZIzj0DAQehRANCAASfrvlFbFCYqn3I2zeknYXLwtH30JuOKestDbSfZYxZNMqhF/OzdZFTV0zc5u5s3eN+oCWbnvl0hM+9IW0UlkdA\n-----END PRIVATE KEY-----',
              teamId: 'YWQCXGJRJL',
            },
          }),
          // ThirdPartyEmailPasswordNode.Facebook({
          //   clientSecret: "FACEBOOK_CLIENT_SECRET",
          //   clientId: "FACEBOOK_CLIENT_ID",
          // }),
        ],
      }),
      SessionNode.init(),
    ],
    telemetry: false,
    isInServerlessEnv: true,
  }
}
