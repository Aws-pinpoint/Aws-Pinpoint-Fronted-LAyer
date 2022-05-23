import { atom } from 'jotai'
import { Campaign, defaultCampaign, defaultStep1, Step1 } from './models'

const initCampaignAtom = atom<Campaign>(defaultCampaign)

export const CampaignAtom = atom(
  get => get(initCampaignAtom),
  (_, set, newVal: Campaign) => {
    set(initCampaignAtom, newVal)
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
        set(initStep1, (prev: Step1) => {
          return {
            ...prev,
            [action.key]: action.val,
            compareVariable: null,
          }
        })
      else
        set(initStep1, (prev: Step1) => {
          return {
            ...prev,
            [action.key]: action.val,
            compareVariable: 'message-content',
          }
        })
    else if (action.key === 'channel')
      if (action.val !== 'in-app')
        set(initStep1, (prev: Step1) => {
          return {
            ...prev,
            [action.key]: action.val,
            prioritization: null,
          }
        })
      else
        set(initStep1, (prev: Step1) => {
          return {
            ...prev,
            [action.key]: action.val,
            prioritization: 'very-important',
          }
        })
    else
      set(initStep1, (prev: Step1) => {
        return {
          ...prev,
          [action.key]: action.val,
        }
      })
  }
)
