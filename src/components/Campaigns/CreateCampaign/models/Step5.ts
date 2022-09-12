// ==========================================================================
// ==                              Step 5                                 ==
// ==========================================================================

import { CampaignType, CampaignChannel, CampaignPriority } from './Step1'
import { OnEventAttribute, OnEventMetric, SendingType } from './Step4'

export interface Step5 {
  campaignDetails: CampaignDetails
}

export interface CampaignDetails {
  name: string
  type: CampaignType
  priority: CampaignPriority

  segment: {
    name: string
    id: string
    holdoutPercent: number
  }

  message: CampaignMessage

  schedule: CampaignSchedule
}

export type CampaignSchedule =
  | {
      type: 'specific-time'
      specificTimeSchedule: SpecificTimeSchedule
    }
  | {
      type: 'on-event'
      onEventSchedule: OnEventSchedule
    }

export interface CampaignMessage {
  channel: CampaignChannel
  header: string
  body: string
  pushNotificationUrl: string | null

  // TODO: forgot why did i put these. comment them out for now
  // contentType: string
  // inAppMessage: string | null
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
    priority: null,

    segment: {
      name: '',
      id: '',
      holdoutPercent: 0,
    },

    message: {
      channel: 'in-app',
      header: '',
      body: '',
      pushNotificationUrl: null,

      // contentType: '',
      // inAppMessage: null,
    },

    schedule: {
      type: 'specific-time',
      specificTimeSchedule: {
        frequency: 'Immediately',
        startTime: 0,
        endTime: 0,
        timezone: '',
      } as SpecificTimeSchedule,
    },
  },
}
