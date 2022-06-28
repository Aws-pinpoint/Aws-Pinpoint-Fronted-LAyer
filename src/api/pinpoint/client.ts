/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  PinpointClient,
  CreateSegmentCommand,
  CreateCampaignCommand,
  GetCampaignCommand,
} from '@aws-sdk/client-pinpoint'
import { CampaignDetails } from '../../components/Campaigns/CreateCampaign/models/Step5'
import { Segment } from '../../components/Segments/models'
import { toWriteCampaignRequest } from './mappings/campaigns'
import { toWriteSegmetRequest } from './mappings/segments'

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

  public async createCampaign(campaignDetails: CampaignDetails) {
    const writeCampaignRequest = toWriteCampaignRequest(campaignDetails)

    const command = new CreateCampaignCommand({
      ApplicationId: this.applicationId,
      WriteCampaignRequest: writeCampaignRequest,
    })

    console.log('campaignDetails ->', campaignDetails)
    console.log('command ->', command)
    /* try {
      const res = await this.client.send(command)
      console.log('res ->', res)
    } catch (err) {
      console.error(err)
      throw err
    } */
  }

  public async getCampaign(id: string) {
    const command = new GetCampaignCommand({
      ApplicationId: this.applicationId,
      CampaignId: id,
    })

    try {
      const res = await this.client.send(command)
      console.log(
        'res ->',
        // res,
        JSON.stringify(res, undefined, 2)
      )
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
