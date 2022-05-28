import cloneDeep from 'clone-deep'
import { atom } from 'jotai'
import {
  Campaign,
  defaultCampaign,
  SelectedStep,
} from './CreateCampaign/models/models'
import { defaultStep1, Step1 } from './CreateCampaign/models/Step1'
import { defaultStep2, Step2 } from './CreateCampaign/models/Step2'
import { defaultStep3, Step3 } from './CreateCampaign/models/Step3'
import { Step4 } from './CreateCampaign/models/Step4'

// ==========================================================================
// ==                              Campaign                                ==
// ==========================================================================

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

// ==========================================================================
// ==                              Step 1                                  ==
// ==========================================================================

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

// ==========================================================================
// ==                              Step 2                                  ==
// ==========================================================================

export const Step2Atom = atom<Step2>(defaultStep2)

// ==========================================================================
// ==                              Step 3                                  ==
// ==========================================================================

export const Step3Atom = atom<Step3>(defaultStep3)

// ==========================================================================
// ==                              Step 4                                  ==
// ==========================================================================

/* const initStep4 = atom<Step4 | null>(defaultStep4)
export interface Step4AtomAction {
  key: 'templateType' | 'templateName'
  val: string
}
export const Step4Atom = atom(
  get => get(initStep4),
  (_, set, action: Step4AtomAction) => {
    set(initStep4, (prev: Step4) => ({
      ...prev,
      [action.key]: action.val,
    }))
  }
) */
