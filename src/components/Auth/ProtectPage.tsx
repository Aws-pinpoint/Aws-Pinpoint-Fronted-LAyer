import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import SuperTokens, { SuperTokensWrapper } from 'supertokens-auth-react'
// import { useAuth } from '../../hooks/Auth/useAuth'
import { UserDetailsAtom } from '../../store/store'

interface Props {
  children: React.ReactNode
}

export const ProtectPage = (props: Props) => {
  const router = useRouter()
  // const { loggedIn } = useAuth()
  // const userDetails: UserDetails | null = store.get(userDetailsLSkey)
  const [userDetails] = useAtom(UserDetailsAtom)

  useEffect(() => {
    // if (loggedIn) {
    if (userDetails && !userDetails.activeAccount) {
      router.push('/activate-account')
    } else if (!userDetails) {
      router.push('/auth')
    }
    // }
  }, [userDetails, router.push])

  if (typeof window !== 'undefined' && SuperTokens.canHandleRoute()) {
    // This renders the login UI on the /auth route
    return SuperTokens.getRoutingComponent()
  } else if (userDetails) {
    // render page
    return <SuperTokensWrapper>{props.children}</SuperTokensWrapper>
  } else {
    // unauthorized
    return null
  }
}
