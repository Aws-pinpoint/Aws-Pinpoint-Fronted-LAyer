import { FunctionComponent, useState } from 'react'
import Head from 'next/head'
import { EuiButton, EuiFieldText, EuiTitle } from '@elastic/eui'
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import { setError } from '../components/Toasts/utils'
import { useAtom } from 'jotai'
import { ToastsAtom } from '../store/store'

const ActivateAccount: FunctionComponent = () => {
  const [activationCode, setActivationCode] = useState('')
  const [, setToasts] = useAtom(ToastsAtom)

  const handleActivateAccount = () => {
    try {
      // throw new Error('Not implemented')
      throw new Error('Not implemented')
    } catch (e) {
      setError(setToasts, 'Sorry ;(', e.message)
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
