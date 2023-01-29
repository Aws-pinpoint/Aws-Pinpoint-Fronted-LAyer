import Analytics from 'analytics'
import awsPinpointPlugin from '@analytics/aws-pinpoint'

import { auth } from './cognito'

window.initAutomatoTracker = (appId: string, poolId: string) => {
  const getCredentials = async () => {
    const creds = await auth({
      COGNITO_REGION: 'us-east-1',
      IDENTITY_POOL_ID: poolId,
    })
    return creds
  }

  return Analytics({
    app: 'automato',
    plugins: [
      awsPinpointPlugin({
        pinpointAppId: appId,
        getCredentials,
      }),
    ],
  })
}
