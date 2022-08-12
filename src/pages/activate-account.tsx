import { FunctionComponent, useState } from 'react'
import Head from 'next/head'
import { EuiButton, EuiFieldText, EuiTitle } from '@elastic/eui'
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import { useToasts } from '../components/Toasts/Toasts'
import automatoApi from '../api/automato/client'
import { useAtom } from 'jotai'
import { UserDetailsAtom } from '../store/store'
import { useRouter } from 'next/router'

const ActivateAccount: FunctionComponent = () => {
  const [activationCode, setActivationCode] = useState('')
  const { setError, setSuccess } = useToasts()
  const [userDetails, setUserDetails] = useAtom(UserDetailsAtom)
  const router = useRouter()

  const handleActivateAccount = async () => {
    try {
      await automatoApi.activateAccount(
        userDetails.supertokensId,
        activationCode
      )
      setSuccess(
        'Account activated successfully',
        'You can now start using Automato'
      )
      setUserDetails({ ...userDetails, activeAccount: true })
      router.push('/')
    } catch (e) {
      setError('Error activating account', e.message)
    }
  }
  return (
    <ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth>
      <Head>
        <title>Activate Account</title>
      </Head>

      <div>
        <EuiTitle size="l">
          <h2>Activate Account</h2>
        </EuiTitle>
        <p className="mt-4 mb-2">
          It appears that your account is not activated.
          <br />
          Please enter the special code that we sent you when you registered
          with us.
        </p>
        <EuiFieldText
          placeholder="Activation Code"
          value={activationCode}
          onChange={e => setActivationCode(e.target.value)}
        />
        <EuiButton fill className="mt-2" onClick={handleActivateAccount}>
          Activate account
        </EuiButton>
      </div>
    </ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth>
  )
}

export default ActivateAccount
