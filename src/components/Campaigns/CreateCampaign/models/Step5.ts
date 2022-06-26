// ==========================================================================
// ==                              Step 5                                 ==
// ==========================================================================

import { CampaignType, CampaignChannel } from './Step1'
import { OnEventAttribute, OnEventMetric } from './Step4'

export interface Step5 {
  pass: string
}

export interface CampaignDetails {
  name: string
  type: CampaignType

  message: {
    channel: CampaignChannel
    contentType: string
    inAppMessage: string | null
  }

  schedule: {
    triggerEvent: string
    attributes: OnEventAttribute[]
    metric: OnEventMetric
    startTime: number
    endTime: number
    timezone: string
  }
}
