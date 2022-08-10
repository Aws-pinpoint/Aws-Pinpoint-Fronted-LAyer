import Head from 'next/head'
import { EuiTitle } from '@elastic/eui'
import { GetServerSideProps } from 'next'
import pinpoint from '../../../api/pinpoint/client'
import { ProtectPage } from '../../../components/Auth/ProtectPage'

const SegmentDetails = () => {
  return (
    <ProtectPage>
      <Head>
        <title>Segment Details - X </title>
      </Head>

      <div>
        <EuiTitle size="l">
          <h2>Segment Details: </h2>
        </EuiTitle>
      </div>
    </ProtectPage>
  )
}

/* export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const segmentId = query.id as string
  const segment = await pinpoint.getSegment(segmentId)
  return { props: { segment } }
} */

export default SegmentDetails
