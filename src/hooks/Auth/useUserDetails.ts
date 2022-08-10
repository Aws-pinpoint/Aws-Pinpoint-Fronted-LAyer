import store from 'store2'
import { useLocalStorage } from 'usehooks-ts'
import automatoApi from '../../api/automato/client'
import {
  UserDetails,
  UserDetailsLS,
  userDetailsLSkey,
} from '../../store/models'

export const useUserDetails = () => {
  const [userDetails, setUserDetails] = useLocalStorage<UserDetails | null>(
    UserDetailsLS,
    null
  )

  const userIsActive = async (supertokensId: string): Promise<boolean> => {
    console.log(userDetails)
    if (userDetails === null) {
      const newUserDetails = await automatoApi.getUserDetails(supertokensId)
      setUserDetails(newUserDetails)
      return newUserDetails.activeAccount
    }

    return userDetails.activeAccount
  }

  return [userIsActive]
}

export const userIsActive = async (supertokensId: string): Promise<boolean> => {
  const userDetails: UserDetails | null = store.get(userDetailsLSkey)
  if (userDetails === undefined || userDetails === null) {
    const newUserDetails = await automatoApi.getUserDetails(supertokensId)
    console.log(newUserDetails)
    store.set(userDetailsLSkey, newUserDetails)
  }

  return userDetails.activeAccount
}
