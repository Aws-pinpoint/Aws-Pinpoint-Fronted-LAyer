import { CampaignDetails } from '../../components/Campaigns/CreateCampaign/models/Step5'
import { Segment } from '../../components/Segments/CreateSegment/models'

export interface CreateSegmentRequest {
  segment: Segment
}

export interface CreateCampaignRequest {
  campaignDetails: CampaignDetails
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type HandlerRes = { status: number; json: any }
