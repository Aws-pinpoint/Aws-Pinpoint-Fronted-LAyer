import { FunctionComponent } from 'react'
import Head from 'next/head'
import { EuiButton, EuiSpacer, EuiTitle } from '@elastic/eui'
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import { signOut } from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import { useRouter } from 'next/router'
import { userDetailsLSkey } from '../store/models'
import { ProtectPage } from '../components/Auth/ProtectPage'
import { Title } from '../ui-kit/Form'
import { useAtom } from 'jotai'
import { UserDetailsAtom } from '../store/store'

const Settings: FunctionComponent = () => {
  const router = useRouter()
  const logout = () => {
    // signout from supertokens
    signOut()

    //empty localStorage
    localStorage.setItem(userDetailsLSkey, null)

    router.push('/auth')
  }

  const [userDetails] = useAtom(UserDetailsAtom)

  return (
    <ProtectPage>
      <Head>
        <title>Settings</title>
      </Head>

      <div>
        <EuiTitle size="l">
          <h2>Settings</h2>
        </EuiTitle>

        {typeof window !== 'undefined' && (
          <Title
            value="Frontend SDK API id"
            subTitle={userDetails.sdkApiId}
            className="mt-4"
            size="s"
          />
        )}

        <EuiButton fill color="danger" className="mt-4" onClick={logout}>
          Logout
        </EuiButton>

        <EuiSpacer size="xs" />
      </div>
    </ProtectPage>
  )
}

export default Settings
