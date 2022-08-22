/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  PinpointClient,
  CreateSegmentCommand,
  CreateCampaignCommand,
  GetCampaignCommand,
  GetSegmentsCommand,
  GetSegmentCommand,
  CreateAppCommand,
  CreateAppCommandInput,
} from '@aws-sdk/client-pinpoint'
import { CampaignDetails } from '../../components/Campaigns/CreateCampaign/models/Step5'
import { Segment } from '../../components/Segments/CreateSegment/models'
import { SegmentsList } from '../../components/Segments/models'
import { toAutomatoSegment } from './mappings/toAutomato/segments'
import { toWriteCampaignRequest } from './mappings/toPinpoint/campaigns'
import { toWriteSegmetRequest } from './mappings/toPinpoint/segments'

interface PinpointConstructor {
  awsRegion: string
  applicationId: string
  accessKeyId: string
  secretAccessKey: string
}
class Pinpoint {
  client: PinpointClient

  constructor(c: PinpointConstructor) {
    this.client = new PinpointClient({
      region: c.awsRegion,
      credentials: {
        accessKeyId: c.accessKeyId,
        secretAccessKey: c.secretAccessKey,
      },
    })
  }

  public async createProject(name: string): Promise<string> {
    const command = new CreateAppCommand({
      CreateApplicationRequest: {
        Name: name,
      },
    } as CreateAppCommandInput)
    try {
      const res = await this.client.send(command)
      return res.ApplicationResponse.Id
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  public async createSegment(applicationId: string, segment: Segment) {
    const writeSegmentRequest = toWriteSegmetRequest(segment)
    /* console.log(
      'writeSegmentRequest ->',
      JSON.stringify(writeSegmentRequest, undefined, 2)
    ) */

    const command = new CreateSegmentCommand({
      ApplicationId: applicationId,
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

  public async getSegments(applicationId: string): Promise<SegmentsList[]> {
    const command = new GetSegmentsCommand({
      ApplicationId: applicationId,
    })

    try {
      const commandRes = await this.client.send(command)
      const res: SegmentsList[] = commandRes.SegmentsResponse.Item.map(x => ({
        name: x.Name,
        id: x.Id,
        lastModified: new Date(x.LastModifiedDate).getTime(),
        type: x.SegmentType === 'DIMENSIONAL' ? 'Dynamic' : 'Static',
      }))
      return res
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async getSegment(applicationId: string, id: string): Promise<Segment> {
    const command = new GetSegmentCommand({
      ApplicationId: applicationId,
      SegmentId: id,
    })

    try {
      const commandRes = await this.client.send(command)

      const segmentResponse = commandRes.SegmentResponse
      const aSegment = toAutomatoSegment(commandRes.SegmentResponse)

      console.log('res ->', JSON.stringify(segmentResponse, undefined, 2))
      console.log('aSegment ->', JSON.stringify(aSegment, undefined, 2))

      return aSegment
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  public async createCampaign(
    applicationId: string,
    campaignDetails: CampaignDetails
  ) {
    const writeCampaignRequest = toWriteCampaignRequest(campaignDetails)

    const command = new CreateCampaignCommand({
      ApplicationId: applicationId,
      WriteCampaignRequest: writeCampaignRequest,
    })

    console.log('campaignDetails ->', campaignDetails)
    console.log('command ->', JSON.stringify(command, undefined, 2))
    try {
      const res = await this.client.send(command)
      console.log('res ->', res)
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  public async getCampaign(applicationId: string, id: string) {
    const command = new GetCampaignCommand({
      ApplicationId: applicationId,
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
