import cloneDeep from 'clone-deep'
import { atom } from 'jotai'
import {
  Campaign,
  defaultCampaign,
  SelectedStep,
} from './CreateCampaign/models/models'
import { defaultStep1, Step1 } from './CreateCampaign/models/Step1'
import { defaultStep2, Step2 } from './CreateCampaign/models/Step2'

const initCampaignAtom = atom<Campaign>(defaultCampaign)

interface CampaignAtomAction {
  type: 'empty' | 'set' | 'goNextStep' | 'goToStep'

  data?: Campaign
  goToStep?: SelectedStep
}
export const CampaignAtom = atom(
  get => get(initCampaignAtom),
  (_, set, action: CampaignAtomAction) => {
    if (action.type === 'set') {
      set(initCampaignAtom, action.data)
    } else if (action.type === 'goNextStep') {
      set(initCampaignAtom, prev => {
        const campaignCopy = cloneDeep(prev)
        const currentIndex = campaignCopy.stepsProgress.findIndex(
          stepProgress => stepProgress.key === campaignCopy.selectedStep
        )
        campaignCopy.stepsProgress[currentIndex].status = 'complete'
        if (currentIndex < campaignCopy.selectedStep.length) {
          campaignCopy.selectedStep =
            campaignCopy.stepsProgress[currentIndex + 1].key
          campaignCopy.stepsProgress[currentIndex + 1].status = 'current'
        }
        return campaignCopy
      })
    } else if (action.type === 'goToStep') {
      set(initCampaignAtom, prev => {
        const campaignCopy = cloneDeep(prev)
        const currentIndex = campaignCopy.stepsProgress.findIndex(
          stepProgress => stepProgress.key === campaignCopy.selectedStep
        )
        const currentStepStatus =
          campaignCopy.stepsProgress[currentIndex].status
        if (currentStepStatus !== 'complete')
          campaignCopy.stepsProgress[currentIndex].status = 'incomplete'

        campaignCopy.selectedStep = action.goToStep
        return campaignCopy
      })
    } else {
      // if (action.type === 'empty')
      set(initCampaignAtom, defaultCampaign)
    }
  }
)

const initStep1 = atom<Step1>(defaultStep1)

export interface Step1AtomAction {
  key:
    | 'campaignName'
    | 'campaignType'
    | 'compareVariable'
    | 'channel'
    | 'prioritization'
  val: string
}

export const Step1Atom = atom(
  get => get(initStep1),
  (_, set, action: Step1AtomAction) => {
    if (action.key === 'campaignType')
      if (action.val === 'standard')
        set(initStep1, (prev: Step1) => ({
          ...prev,
          [action.key]: action.val,
          compareVariable: null,
        }))
      else
        set(initStep1, (prev: Step1) => ({
          ...prev,
          [action.key]: action.val,
          compareVariable: 'message-content',
        }))
    else if (action.key === 'channel')
      if (action.val !== 'in-app')
        set(initStep1, (prev: Step1) => ({
          ...prev,
          [action.key]: action.val,
          prioritization: null,
        }))
      else
        set(initStep1, (prev: Step1) => ({
          ...prev,
          [action.key]: action.val,
          prioritization: 'very-important',
        }))
    else
      set(initStep1, (prev: Step1) => ({
        ...prev,
        [action.key]: action.val,
      }))
  }
)

const initStep2 = atom<Step2>(defaultStep2)

export interface Step2AtomAction {
  key: 'segmentName' | 'holdoutPercent'
  val: string | number
}

export const Step2Atom = atom(
  get => get(initStep2),
  (_, set, action: Step2AtomAction) => {
    set(initStep2, (prev: Step2) => ({
      ...prev,
      [action.key]: action.val,
    }))
  }
)
