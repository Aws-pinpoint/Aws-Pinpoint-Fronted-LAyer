import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import SuperTokens, { redirectToAuth } from 'supertokens-auth-react'

const SuperTokensComponentNoSSR = dynamic(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new Promise(res => res(SuperTokens.getRoutingComponent)) as any,
  { ssr: false }
)

export default function Auth() {
  // if the user visits a page that is not handled by us (like /auth/random), then we redirect them back to the auth page.
  useEffect(() => {
    if (SuperTokens.canHandleRoute() === false) {
      redirectToAuth()
    }
  }, [])

  return <SuperTokensComponentNoSSR />
}
