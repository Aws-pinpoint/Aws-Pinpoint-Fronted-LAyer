import {
  CognitoIdentityClient,
  CreateIdentityPoolCommand,
} from '@aws-sdk/client-cognito-identity'

interface CognitoConstructor {
  awsRegion: string
  accessKeyId: string
  secretAccessKey: string
}
class Cognito {
  client: CognitoIdentityClient

  constructor(c: CognitoConstructor) {
    this.client = new CognitoIdentityClient({
      region: c.awsRegion,
      credentials: {
        accessKeyId: c.accessKeyId,
        secretAccessKey: c.secretAccessKey,
      },
    })
  }

  async createIdentityPool(name: string): Promise<string> {
    const command = new CreateIdentityPoolCommand({
      IdentityPoolName: name,
      AllowUnauthenticatedIdentities: true,
    })
    try {
      const res = await this.client.send(command)
      const identityPoolId = res.IdentityPoolId

      // TODO: change some iam roles here???

      return identityPoolId
    } catch (err) {
      console.error(err)
      throw err.message
    }
  }
}

const cognito = new Cognito({
  awsRegion: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

export default cognito
