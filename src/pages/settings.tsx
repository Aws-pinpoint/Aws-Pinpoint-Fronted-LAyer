import { FunctionComponent } from 'react'
import Head from 'next/head'
import { EuiButton, EuiSpacer, EuiTitle } from '@elastic/eui'
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import { signOut } from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import { useRouter } from 'next/router'
import { userDetailsLSkey } from '../store/models'

const Settings: FunctionComponent = () => {
  const router = useRouter()
  const logout = () => {
    // signout from supertokens
    signOut()

    //empty localStorage
    localStorage.setItem(userDetailsLSkey, null)

    router.push('/auth')
  }

  return (
    <ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth>
      <Head>
        <title>Settings</title>
      </Head>

      <div>
        <EuiTitle size="l">
          <h2>Settings</h2>
        </EuiTitle>

        <EuiButton fill color="danger" className="mt-4" onClick={logout}>
          Logout
        </EuiButton>

        <EuiSpacer size="xs" />
      </div>
    </ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth>
  )
}

export default Settings
