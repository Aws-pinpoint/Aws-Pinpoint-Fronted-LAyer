import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import { useAuth } from '../../hooks/Auth/useAuth'
import { UserDetailsAtom } from '../../store/store'

interface Props {
  children: React.ReactNode
}

export const ProtectPage = (props: Props) => {
  const router = useRouter()
  const { loggedIn } = useAuth()
  // const userDetails: UserDetails | null = store.get(userDetailsLSkey)
  const [userDetails] = useAtom(UserDetailsAtom)

  if (loggedIn) {
    if (userDetails === null || !userDetails.activeAccount) {
      router.push('/activate-account')
    }
  }

  return (
    <ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth>
      {props.children}
    </ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth>
  )
}
