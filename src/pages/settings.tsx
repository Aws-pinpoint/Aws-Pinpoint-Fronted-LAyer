import { FunctionComponent } from 'react'
import Head from 'next/head'
import { EuiSpacer, EuiTitle } from '@elastic/eui'
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

const Settings: FunctionComponent = () => {
  return (
    <ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth>
      <Head>
        <title>Settings</title>
      </Head>

      <div>
        <EuiTitle size="l">
          <h2>Settings</h2>
        </EuiTitle>

        <EuiSpacer size="xs" />
      </div>
    </ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth>
  )
}

export default Settings
