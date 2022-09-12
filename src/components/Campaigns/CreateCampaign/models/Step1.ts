// ==========================================================================
// ==                              Step 1                                 ==
// ==========================================================================
export interface Step1 {
  campaignName: string
  campaignType: CampaignType
  compareVariable: 'message-content' | 'delivery-schedule' | null
  channel: CampaignChannel
  prioritization: CampaignPriority
}

export type CampaignPriority =
  | 'very-important'
  | 'fairly-important'
  | 'important'
  | 'slightly-important'
  | 'less-important'
  | null

export type CampaignType = 'standard' | 'AB'
export type CampaignChannel =
  | 'email'
  | 'in-app'
  | 'sms'
  | 'push-notification'
  | 'custom'

// Default values
export const defaultStep1: Step1 = {
  campaignName: '',
  campaignType: 'standard',
  compareVariable: null,
  channel: 'push-notification',
  prioritization: null,
}

// Options
export const campaignTypeOptions = [
  {
    value: 'standard',
    label:
      'Standard campaign - Send messages to your segments on a schedule or when specific events occur.',
  },
  {
    value: 'AB',
    label:
      'A/B test campaign - Create multiple message treatments and compare their performance.',

    // TODO: implement this
    disabled: true,
  },
]
export const compareVariableOptions = [
  {
    value: 'message-content',
    label:
      'Message content - Compare the performance of two or more message treatments with different content.',
  },
  {
    value: 'delivery-schedule',
    label:
      'Delivery schedule - Compare the performance of two or more message treatments with the same content but sent at different times.',
  },
]
export const channelOptions = [
  {
    value: 'email',
    label: 'Email',

    // TODO: implement this
    disabled: true,
  },
  {
    value: 'in-app',
    label: 'In-app messaging',
  },
  {
    value: 'sms',
    label: 'SMS',

    // TODO: implement this
    disabled: true,
  },
  {
    value: 'push-notification',
    label: 'Push notifications',
  },
  {
    value: 'custom',
    label: 'Custom',

    // TODO: implement this
    disabled: true,
  },
]
export const prioritizationOptions = [
  {
    value: 'very-important',
    label: 'Very important',
  },
  {
    value: 'fairly-important',
    label: 'Fairly important',
  },
  {
    value: 'important',
    label: 'Important',
  },
  {
    value: 'slightly-important',
    label: 'Slightly important',
  },
  {
    value: 'less-important',
    label: 'Less important',
  },
]
