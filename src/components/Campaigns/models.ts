type SelectedStep = 'step1' | 'step2' | 'step3' | 'step4' | 'step5'

interface StepProgress {
  title: string
  status: 'current' | 'complete' | 'disabled'
  key: SelectedStep
}

export interface Campaign {
  steps: Steps
  selectedStep: SelectedStep
  stepsProgress: StepProgress[]
}

interface Steps {
  step1: Step1
  step2?: Step2
  step3?: Step3
  step4?: Step4
  step5?: Step5
}

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

export const defaultStepProgressList: StepProgress[] = [
  {
    title: 'Step 1',
    status: 'current',
    key: 'step1',
  },
  {
    title: 'Step 2',
    status: 'disabled',
    key: 'step2',
  },
  {
    title: 'Step 3',
    status: 'disabled',
    key: 'step3',
  },
  {
    title: 'Step 4',
    status: 'disabled',
    key: 'step4',
  },
  {
    title: 'Step 5',
    status: 'disabled',
    key: 'step5',
  },
]

export const defaultCampaign: Campaign = {
  steps: defaultSteps,
  selectedStep: 'step1',
  stepsProgress: defaultStepProgressList,
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
