import Head from 'next/head'
import { EuiTitle } from '@elastic/eui'
import CreateSegment from '../../components/Segments/CreateSegment/CreateSegment'
import { ProtectPage } from '../../components/Auth/ProtectPage'

const CreateSegmentPage = () => {
  return (
    <ProtectPage>
      <Head>
        <title>Automoato - Create a Segment</title>
      </Head>

      <div>
        <EuiTitle size="l">
          <h2>Create a Segment</h2>
        </EuiTitle>
        <CreateSegment />
      </div>
    </ProtectPage>
  )
}

export default CreateSegmentPage
