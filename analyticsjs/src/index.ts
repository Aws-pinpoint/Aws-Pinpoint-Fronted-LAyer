import Analytics, { AnalyticsInstance } from 'analytics'
import cognitoAuth from 'tiny-cognito'
import awsPinpointPlugin from '@analytics/aws-pinpoint'

// Identity pool ID that allows for unauthenticated access
const poolId = 'us-east-1:11111111-22222-222222-44444'
const region = 'us-east-1'

function getCredentials() {
  return cognitoAuth({
    COGNITO_REGION: region,
    IDENTITY_POOL_ID: poolId,
  })
}

const analytics = Analytics({
  app: 'automato',
  plugins: [
    awsPinpointPlugin({
      pinpointAppId: '123456789',
      getCredentials: getCredentials,
    })
  ]
})

window.automatoTracker = (_appId: string, _auth: string): AnalyticsInstance => {
  return analytics
}
