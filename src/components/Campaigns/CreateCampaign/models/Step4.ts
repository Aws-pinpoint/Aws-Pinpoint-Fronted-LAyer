// ==========================================================================
// ==                              Step 4                                 ==
// ==========================================================================

/* export interface Step4 {
  campaignSendType: 'specific-time' | 'on-event'
  onEventStep: OnEventStep | null
  specificTimeStep: SpecificTimeStep | null
  campaignSettings?: CampaignSettings
} */

export type Step4 =
  | {
      campaignSendType: 'specific-time'
      specificTimeStep: SpecificTimeStep | null
      campaignSettings?: CampaignSettings
    }
  | {
      campaignSendType: 'on-event'
      onEventStep: OnEventStep | null
      campaignSettings?: CampaignSettings
    }

// export type CampaignSendType = 'specific-time' | 'on-event'

// ==========================================================================
// ==                            Specic Time                               ==
// ==========================================================================

export type SendingType =
  | 'Immediately'
  | 'Once'
  | 'Hourly'
  | 'Daily'
  | 'Weekly'
  | 'Monthly'

interface QuietTime {
  startTime: number
  endTime: number
  overideProjectSettings: boolean
}

interface SpecificTimeStep {
  sendingType: SendingType
  startDate?: number
  endDate?: number
  timeZone: string

  quietTime?: QuietTime
}

interface CampaignSettings {
  pass?: string
}

// ==========================================================================
// ==                              On Event                                ==
// ==========================================================================

export interface OnEventStep {
  triggerEvent: string
  attributes: OnEventAttribute[]

  metric: OnEventMetric
  startTime: number | null
  endTime: number | null
  timeZone: string
}

export interface OnEventMetric {
  metric: string
  operator: MetricOperator
  value: number
}

export type MetricOperator =
  | 'equal-to'
  | 'greater-than'
  | 'less-than'
  | 'greater-than-or-equal-to'
  | 'less-than-or-equal-to'

export interface OnEventAttribute {
  attribute: string
  value: string
}

// Options
export const stepTypeOptions = [
  {
    value: 'specific-time',
    label:
      'At a specific time - Send the campaign at specific time, or on a recurring basis.',
  },
  {
    value: 'on-event',
    label:
      'When an event occurs - Send the campaign when your customers take specific actions.',
  },
]

export const metricOperatorOptions = [
  { value: 'equal-to', text: 'is equal to' },
  { value: 'greater-than', text: 'is greater than' },
  { value: 'less-than', text: 'is less than' },
  { value: 'greater-than-or-equal-to', text: 'is greater than or equal to' },
  { value: 'less-than-or-equal-to', text: 'is less than or equal to' },
]

// Defaults
export const defaultOnEventAttribute: OnEventAttribute = {
  attribute: '',
  value: '',
}

export const dafaultOnEventStep: OnEventStep = {
  triggerEvent: '',
  attributes: [defaultOnEventAttribute],
  metric: {
    metric: '',
    operator: 'equal-to',
    value: 0,
  },
  startTime: null,
  endTime: null,
  timeZone: '',
}

export const defaultStep4: Step4 = {
  campaignSendType: 'on-event',
  onEventStep: dafaultOnEventStep,
}
