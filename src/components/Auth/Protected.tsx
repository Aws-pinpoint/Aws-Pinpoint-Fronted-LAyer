import { useRouter } from 'next/router'
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import { useAuth } from '../../hooks/Auth/useAuth'
import { useUserDetails } from '../../hooks/Auth/useUserDetails'

interface Props {
  children: React.ReactNode
}

export const Protected = (props: Props) => {
  const router = useRouter()
  const { loggedIn, supertokensId } = useAuth()
  const [userIsActive] = useUserDetails()

  if (loggedIn) {
    if (!userIsActive(supertokensId)) {
      router.push('/activate-account')
    }
  }

  return (
    <ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth>
      {props.children}
    </ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth>
  )
}
