import { useMemo } from 'react'
import { useSessionContext } from 'supertokens-auth-react/recipe/session'

export const useAuth = () => {
  const session = useSessionContext()
  const [loggedIn, supertokensId] = useMemo(() => {
    const ok = session.loading === false && session.doesSessionExist === true
    return [ok, ok ? session.userId : null]
  }, [session])

  return { loggedIn, supertokensId }
}
