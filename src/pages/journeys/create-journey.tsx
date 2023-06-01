import { ProtectPage } from '../../components/Auth/ProtectPage'
import Head from 'next/head'
import { EuiTitle } from '@elastic/eui'

const CreateJourneyPage = () => {
  return (
    <ProtectPage>
      <Head>
        <title>Automoato - Create a Journey</title>
      </Head>

      <div>
        <EuiTitle size="l">
          <h2>Create a Journey</h2>
        </EuiTitle>
      </div>
    </ProtectPage>
  )
}

export default CreateJourneyPage
