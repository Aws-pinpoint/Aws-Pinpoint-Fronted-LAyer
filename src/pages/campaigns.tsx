import { FunctionComponent } from 'react'
import Head from 'next/head'
import { EuiSpacer, EuiTitle } from '@elastic/eui'

const Campaigns: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Campaigns</title>
      </Head>

      <div>
        <EuiTitle size="l">
          <h2>Campaigns</h2>
        </EuiTitle>

        <EuiSpacer size="xs" />
      </div>
    </>
  )
}

export default Campaigns
