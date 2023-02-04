import {
  CognitoIdentityClient,
  CreateIdentityPoolCommand,
  SetIdentityPoolRolesCommand,
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
    const pool_command = new CreateIdentityPoolCommand({
      IdentityPoolName: name,
      AllowUnauthenticatedIdentities: true,
    })
    try {
      const pool_res = await this.client.send(pool_command)
      const identityPoolId = pool_res.IdentityPoolId

      // assign roles to the identity pool
      const roles_command = new SetIdentityPoolRolesCommand({
        IdentityPoolId: identityPoolId,
        Roles: {
          unauthenticated: 'arn:aws:iam::319183329627:role/PutEvents',
          authenticated: 'arn:aws:iam::319183329627:role/PutEvents',
        },
      })

      await this.client.send(roles_command)

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
