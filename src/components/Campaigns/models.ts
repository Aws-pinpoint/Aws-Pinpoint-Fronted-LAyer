import {
  CampaignChannel,
  CampaignPriority,
  CampaignType,
} from './CreateCampaign/models/Step1'

export interface CampaignsList {
  name: string
  id: string
  channel: CampaignChannel
  type: CampaignType
  priority: CampaignPriority
  createdDate: string
  schedule: string
  status: string
}

export interface CustomAttributesList {
  name: string
}
