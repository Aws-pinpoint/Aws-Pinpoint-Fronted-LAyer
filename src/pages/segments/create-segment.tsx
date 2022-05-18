import Head from 'next/head'
import { EuiTitle } from '@elastic/eui'
import CreateSegment from '../../components/Segments/CreateSegment/CreateSegment'

const CreateSegmentPage = () => {
  return (
    <>
      <Head>
        <title>Create a Segment</title>
      </Head>

      <div>
        <EuiTitle size="l">
          <h2>Create a Segment</h2>
        </EuiTitle>
        <CreateSegment />
      </div>
    </>
  )
}

export default CreateSegmentPage
