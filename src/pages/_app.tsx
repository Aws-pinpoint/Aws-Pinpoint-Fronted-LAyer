import '../styles/global.css'
import { FunctionComponent } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { EuiErrorBoundary } from '@elastic/eui'
import { Global } from '@emotion/react'
import Chrome from '../eui/chrome'
import { Theme } from '../eui/theme'
import { globalStyes } from '../styles/global.styles'
import Layout from '../layout/Layout'

import SuperTokens from 'supertokens-auth-react'
import { frontendConfig } from '../api/supertokens/config/frontendConfig'
import { Toasts } from '../components/Toasts/Toasts'
import 'regenerator-runtime/runtime'

if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokens.init(frontendConfig())
}

const EuiApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  /* const session = useSessionContext()
  useEffect(() => {
    if
  }, [session]) */

  return (
    <>
      <Head>
        {/* You can override this in other pages - see index.tsx for an example */}
        <title>Automato</title>
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
      <Toasts />
    </>
  )
}

export default EuiApp
