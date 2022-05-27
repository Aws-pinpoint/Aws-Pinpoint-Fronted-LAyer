// ==========================================================================
// ==                              Step 4                                 ==
// ==========================================================================

export interface Step4 {
  campaignSendType: 'specific-time' | 'on-event'
  step: SpecificTimeStep | OnEventStep
  campaignSettings: CampaignSettings
}

type SendingType =
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

  quietTime: QuietTime | null
}

interface CampaignSettings {
  pass?: string
}

interface OnEventStep {}
