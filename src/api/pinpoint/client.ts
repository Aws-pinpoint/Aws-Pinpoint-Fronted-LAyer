/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  CreateSegmentCommand,
  CreateCampaignCommand,
  GetCampaignCommand,
  GetSegmentsCommand,
  GetSegmentCommand,
  CreateAppCommand,
  CreateAppCommandInput,
  GetCampaignsCommand,
  PinpointClient,
  GetApplicationDateRangeKpiCommand,
} from '@aws-sdk/client-pinpoint'
import { CampaignDetails } from '../../components/Campaigns/CreateCampaign/models/Step5'
import {
  CampaignsList,
  // CustomAttributesList,
} from '../../components/Campaigns/models'
import { Segment } from '../../components/Segments/CreateSegment/models'
import { SegmentsList } from '../../components/Segments/models'
import { toAutomatoCampaign } from './mappings/toAutomato/campaigns'
import { toAutomatoSegment } from './mappings/toAutomato/segments'
import { toWriteCampaignRequest } from './mappings/toPinpoint/campaigns'
import { toWriteSegmetRequest } from './mappings/toPinpoint/segments'
import https from 'https'
import aws4 from 'aws4'

interface AWSRESTConstructor {
  awsRegion: string
  accessKeyId: string
  secretAccessKey: string
}

type ExtraHeaders = {
  [k: string]: unknown
}

interface AWSRESTCallOpts {
  host?: string
  method?: string
  path?: string
  body?: string
  service?: string
  region?: string
  signQuery?: boolean
  extraHeadersToIgnore?: ExtraHeaders
  extraHeadersToInclude?: ExtraHeaders
}
class AWSREST {
  props: AWSRESTConstructor

  constructor(c: AWSRESTConstructor) {
    this.props = c
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async call(opts: AWSRESTCallOpts): Promise<any> {
    const o = {
      host: 'pinpoint.us-east-1.amazonaws.com',
      service: 'mobiletargeting',
      region: this.props.awsRegion,
      ...opts,
    }

    const reqOpts = aws4.sign(o, {
      accessKeyId: this.props.accessKeyId,
      secretAccessKey: this.props.secretAccessKey,
    })

    return new Promise((resolve, reject) => {
      https
        .request(reqOpts, res => {
          if (res.statusCode < 200 || res.statusCode >= 300) {
            reject(new Error(`statusCode=${res.statusCode}`))
            return
          }

          let body = []
          res.on('data', chunk => {
            body.push(chunk)
          })

          res.on('end', () => {
            try {
              body = JSON.parse(Buffer.concat(body).toString())
            } catch (e) {
              reject(e)
              return
            }

            resolve(body)
          })
        })
        .end(opts.body || '')
        .on('error', err => {
          reject(err)
        })
      // resolve({})
    })
  }
}

interface PinpointConstructor {
  awsRegion: string
  accessKeyId: string
  secretAccessKey: string
}
class Pinpoint {
  client: PinpointClient
  restClient: AWSREST

  constructor(c: PinpointConstructor) {
    this.client = new PinpointClient({
      region: c.awsRegion,
      credentials: {
        accessKeyId: c.accessKeyId,
        secretAccessKey: c.secretAccessKey,
      },
    })
    this.restClient = new AWSREST(c)
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

    const command = new CreateSegmentCommand({
      ApplicationId: applicationId,
      WriteSegmentRequest: writeSegmentRequest,
    })
    try {
      await this.client.send(command)
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
      const aSegment = toAutomatoSegment(commandRes.SegmentResponse)
      return aSegment
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  public async getCustomAttributes(applicationId: string): Promise<unknown> {
    try {
      const res = await this.restClient.call({
        path: `/v1/apps/${applicationId}/endpoints/attributes/legacy`,
      })
      return res
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

    try {
      await this.client.send(command)
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  public async getCampaigns(applicationId: string) {
    const command = new GetCampaignsCommand({
      ApplicationId: applicationId,
    })

    try {
      const commandRes = await this.client.send(command)

      const pCampaigns = commandRes.CampaignsResponse.Item
      const res: CampaignsList[] = pCampaigns.map(pCampaign => {
        const campaignDetails = toAutomatoCampaign(pCampaign)
        const x: CampaignsList = {
          name: campaignDetails.name,
          id: pCampaign.Id,
          channel: campaignDetails.message.channel,
          //TODO: change this when we implement AB campaign type
          type: 'standard',
          priority: campaignDetails.priority,
          schedule: 'WIP',
          createdDate: pCampaign.CreationDate,
          status: pCampaign.State.CampaignStatus,
        }
        return x
      })

      return res
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  public async getCampaign(
    applicationId: string,
    id: string
  ): Promise<CampaignDetails> {
    try {
      const command = new GetCampaignCommand({
        ApplicationId: applicationId,
        CampaignId: id,
      })
      const commandRes = await this.client.send(command)
      const campaignDetails = toAutomatoCampaign(commandRes.CampaignResponse)
      return campaignDetails
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  public async getAnalytics(
    applicationId: string,
    kpi: string,
    from: Date,
    to: Date
  ) {
    const command = new GetApplicationDateRangeKpiCommand({
      ApplicationId: applicationId,
      KpiName: kpi,
      StartTime: from,
      EndTime: to,
    })

    try {
      const commandRes = await this.client.send(command)
      return commandRes.ApplicationDateRangeKpiResponse.KpiResult.Rows
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
})

export default pinpoint
