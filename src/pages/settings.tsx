import { FunctionComponent } from 'react'
import Head from 'next/head'
import { EuiSpacer, EuiTitle } from '@elastic/eui'

const Settings: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>

      <div>
        <EuiTitle size="l">
          <h2>Settings</h2>
        </EuiTitle>

        <EuiSpacer size="xs" />
      </div>
    </>
  )
}

export default Settings
