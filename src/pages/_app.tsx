import '../styles/global.css'
import { FunctionComponent, useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { EuiErrorBoundary } from '@elastic/eui'
import { Global } from '@emotion/react'
import Chrome from '../eui/chrome'
import { Theme } from '../eui/theme'
import { globalStyes } from '../styles/global.styles'
import Layout from '../layout/Layout'

import SuperTokensReact, { SuperTokensWrapper } from 'supertokens-auth-react'
import { frontendConfig } from '../api/supertokens/config/frontendConfig'

if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig())
}

const EuiApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  /* const session = useSessionContext()
  useEffect(() => {
    if
  }, [session]) */

  return (
    <SuperTokensWrapper>
      <>
        <Head>
          {/* You can override this in other pages - see index.tsx for an example */}
          <title>Next.js EUI Starter</title>
        </Head>
        <Global styles={globalStyes} />
        <Theme>
          <Chrome>
            <EuiErrorBoundary>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </EuiErrorBoundary>
          </Chrome>
        </Theme>
      </>
    </SuperTokensWrapper>
  )
}

export default EuiApp
