import { Analytics } from '@aws-amplify/analytics/lib/Analytics'
import { Auth } from '@aws-amplify/auth'

// //Record an event
// Analytics.record('some-event-name');

// //Record a custom event
// Analytics.record({
//     name: 'Album',
//     attributes: { genre: 'Rock', year: '1989' }
// });

window.initAutomatoTracker = (appId: string, poolId: string) => {
  const amplifyConfig = {
    Auth: {
      identityPoolId: poolId,
      region: 'us-east-1',
    },
  }
  //Initialize Amplify
  Auth.configure(amplifyConfig)

  const analyticsConfig = {
    AWSPinpoint: {
      // Amazon Pinpoint App Client ID
      appId: appId,
      // Amazon service region
      region: 'us-east-1',
      mandatorySignIn: false,
    },
  }

  Analytics.configure(analyticsConfig)

  return Analytics
}
