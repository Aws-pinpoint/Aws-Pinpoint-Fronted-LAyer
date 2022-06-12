import { PinpointClient, CreateSegmentCommand } from '@aws-sdk/client-pinpoint'
import { Segment } from '../../components/Segments/models'
import { toWriteSegmetRequest } from './mappings'

interface PinpointConstructor {
  awsRegion: string
  applicationId: string
  accessKeyId: string
  secretAccessKey: string
}
class Pinpoint {
  applicationId: string // project id
  client: PinpointClient

  constructor(c: PinpointConstructor) {
    this.applicationId = c.applicationId
    this.client = new PinpointClient({
      region: c.awsRegion,
      credentials: {
        accessKeyId: c.accessKeyId,
        secretAccessKey: c.secretAccessKey,
      },
    })
  }

  public async createSegment(segment: Segment) {
    const writeSegmentRequest = toWriteSegmetRequest(segment)
    console.log(
      'writeSegmentRequest ->',
      JSON.stringify(writeSegmentRequest, undefined, 2)
    )

    const command = new CreateSegmentCommand({
      ApplicationId: this.applicationId,
      WriteSegmentRequest: writeSegmentRequest,
    })

    try {
      const res = await this.client.send(command)
      console.log('res ->', res)
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}

const pinpoint = new Pinpoint({
  awsRegion: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  applicationId: process.env.AWS_APPLICATION_ID,
})

export default pinpoint
