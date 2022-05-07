import { FunctionComponent } from 'react'
import Head from 'next/head'
import { EuiSpacer, EuiTitle } from '@elastic/eui'

const GettingStarted: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Analytics</title>
      </Head>

      <div>
        <EuiTitle size="l">
          <h2>Analytics</h2>
        </EuiTitle>

        <EuiSpacer size="xs" />
      </div>
    </>
  )
}

export default GettingStarted
