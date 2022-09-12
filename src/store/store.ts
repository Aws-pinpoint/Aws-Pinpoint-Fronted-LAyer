import { Toast } from '@elastic/eui/src/components/toast/global_toast_list'
import { atom } from 'jotai'
import store from 'store2'
import { CampaignsList } from '../components/Campaigns/models'
import { SegmentsList } from '../components/Segments/models'
import { UserDetails, userDetailsLSkey } from './models'

/* const UserDetailsInitAtom = atom<UserDetails | null>(
  (JSON.parse(localStorage.getItem(userDetailsLSkey)) as UserDetails) ?? null
) */
const UserDetailsInitAtom = atom<UserDetails | null>(
  (store.get(userDetailsLSkey) as UserDetails) ?? null
)

export const UserDetailsAtom = atom(
  get => get(UserDetailsInitAtom),
  (_, set, newUserDetails: UserDetails) => {
    set(UserDetailsInitAtom, newUserDetails)
    // localStorage.setItem(userDetailsLSkey, JSON.stringify(newUserDetails))
    store.set(userDetailsLSkey, newUserDetails)
  }
)

export type ToastsAction =
  | { type: 'add'; toast: Toast }
  | { type: 'remove'; toastId: string }
  | { type: 'clean' }

const InitToastsAtom = atom<Toast[]>([])
export const ToastsAtom = atom(
  get => get(InitToastsAtom),
  (get, set, action: ToastsAction) => {
    switch (action.type) {
      case 'add':
        set(InitToastsAtom, [...get(InitToastsAtom), action.toast])
        break
      case 'remove':
        set(
          InitToastsAtom,
          get(InitToastsAtom).filter(t => t.id !== action.toastId)
        )
        break
      case 'clean':
        set(InitToastsAtom, [])
        break
    }
  }
)

export const SegmentsListAtom = atom<SegmentsList[]>([])
export const CampaignsListAtom = atom<CampaignsList[]>([])

/* export const SegmentsListAtom = atom(
  async (get, set) => {
    const oldSegmentsList = get(InitSegmentsListAtom)
    if (oldSegmentsList.length === 0)
      try {
        const newSegmentsList = await automatoApi.getSegments()
        set(InitSegmentsListAtom, newSegmentsList)
        return newSegmentsList
      } catch (error) {
        // setError('Error getting segments', error.message)
        set(ToastsAtom, {
          type: 'add',
          toast: {
            id: Math.random().toString(),
            title: 'Error getting segments',
            color: 'danger',
            iconType: 'help',
            text: error.message,
          },
        })
        return []
      }
    return oldSegmentsList
  },
  (get, set, data) => {
    set(InitSegmentsListAtom, data)
  }
) */
