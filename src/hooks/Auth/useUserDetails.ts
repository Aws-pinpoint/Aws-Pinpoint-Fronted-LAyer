import { useLocalStorage } from 'usehooks-ts'
import automatoApi from '../../api/automato/client'
import { UserDetails, UserDetailsLS } from '../../store/models'

export const useUserDetails = () => {
  const [userDetails, setUserDetails] = useLocalStorage<UserDetails | null>(
    UserDetailsLS,
    null
  )

  const userIsActive = async (supertokensId: string): Promise<boolean> => {
    if (userDetails === null) {
      const userDetails = await automatoApi.getUserDetails(supertokensId)
      setUserDetails(userDetails)
      return userDetails.activeAccount
    }

    return userDetails.activeAccount
  }

  return [userIsActive]
}
