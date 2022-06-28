// ==========================================================================
// ==                              Step 5                                 ==
// ==========================================================================

import { CampaignType, CampaignChannel } from './Step1'
import { OnEventAttribute, OnEventMetric, SendingType } from './Step4'

export interface Step5 {
  campaignDetails: CampaignDetails
}

export interface CampaignDetails {
  name: string
  type: CampaignType

  segment: {
    name: string
    id: string
  }

  message: {
    channel: CampaignChannel
    contentType: string
    inAppMessage: string | null
  }

  schedule: OnEventSchedule | SpecificTimeSchedule
}

export interface OnEventSchedule {
  triggerEvent: string
  attributes: OnEventAttribute[]
  metric: OnEventMetric
  startTime: number
  endTime: number
  timezone: string
}

export interface SpecificTimeSchedule {
  frequency: SendingType
  startTime: number
  endTime: number
  timezone: string
}

// default
export const defaultStep5: Step5 = {
  campaignDetails: {
    name: '',
    type: 'standard',

    segment: {
      name: '',
      id: '',
    },

    message: {
      channel: 'in-app',
      contentType: '',
      inAppMessage: null,
    },

    schedule: {
      frequency: 'Immediately',
      startTime: 0,
      endTime: 0,
      timezone: '',
    } as SpecificTimeSchedule,
  },
}
