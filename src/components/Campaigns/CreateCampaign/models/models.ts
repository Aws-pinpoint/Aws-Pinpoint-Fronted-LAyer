import { defaultStep1, Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'
import { Step4 } from './Step4'
import { Step5 } from './Step5'

export type SelectedStep = 'step1' | 'step2' | 'step3' | 'step4' | 'step5'
export type StepProgressStatus =
  | 'current'
  | 'complete'
  | 'incomplete'
  | 'disabled'
interface StepProgress {
  title: string
  status: StepProgressStatus
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
