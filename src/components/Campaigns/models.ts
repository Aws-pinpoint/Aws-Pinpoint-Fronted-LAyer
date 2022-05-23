export const defaultStep1: Step1 = {
  campaignName: '',
  campaignType: 'standard',
  compareVariable: null,
  channel: 'push-notification',
  prioritization: null,
}

export const defaultSteps: Steps = {
  step1: defaultStep1,
}

export const defaultCampaign: Campaign = {
  steps: defaultSteps,
}

export interface Campaign {
  steps: Steps
}

//possible keys: step1 | step2 | step3 | step4 | step5
type Steps = {
  [key: string]: Step1 | Step2 | Step3 | Step4 | Step5
}

// ==========================================================================
// ==                              Step 1                                 ==
// ==========================================================================

export interface Step1 {
  campaignName: string
  campaignType: 'standard' | 'AB'
  compareVariable: 'message-content' | 'delivery-schedule' | null
  channel: 'email' | 'in-app' | 'sms' | 'push-notification' | 'custom'
  prioritization:
    | 'very-important'
    | 'fairly-important'
    | 'important'
    | 'slightly-important'
    | 'less-important'
    | null
}
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
  },
  {
    value: 'in-app',
    label: 'In-app messaging',
  },
  {
    value: 'sms',
    label: 'SMS',
  },
  {
    value: 'push-notifications',
    label: 'Push notifications',
  },
  {
    value: 'custom',
    label: 'Custom',
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

// ==========================================================================
// ==                              Step 2                                 ==
// ==========================================================================

interface Step2 {
  pass: string
}
interface Step3 {
  pass: string
}
interface Step4 {
  pass: string
}
interface Step5 {
  pass: string
}
