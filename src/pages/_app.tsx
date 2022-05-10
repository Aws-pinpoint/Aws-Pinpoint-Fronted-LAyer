import '../styles/global.css'
import { FunctionComponent } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { EuiErrorBoundary } from '@elastic/eui'
import { Global } from '@emotion/react'
import Chrome from '../components/chrome'
import { Theme } from '../components/theme'
import { globalStyes } from '../styles/global.styles'
import Layout from '../layout/Layout'


const EuiApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
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
)

export default EuiApp
