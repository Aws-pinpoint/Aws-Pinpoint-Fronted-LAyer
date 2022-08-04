import Head from 'next/head'
import { EuiTitle } from '@elastic/eui'
import CreateSegment from '../../components/Segments/CreateSegment/CreateSegment'
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

const CreateSegmentPage = () => {
  return (
    <ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth>
      <Head>
        <title>Create a Segment</title>
      </Head>

      <div>
        <EuiTitle size="l">
          <h2>Create a Segment</h2>
        </EuiTitle>
        <CreateSegment />
      </div>
    </ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth>
  )
}

export default CreateSegmentPage
