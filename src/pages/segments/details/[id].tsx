import Head from 'next/head'
import { EuiTitle } from '@elastic/eui'
import { ProtectPage } from '../../../components/Auth/ProtectPage'
import { useEffect, useState } from 'react'
import { Segment } from '../../../components/Segments/CreateSegment/models'
import automatoApi from '../../../api/automato/client'
import { GetServerSideProps } from 'next'

const SegmentDetails = ({ segmentId }: { segmentId: string }) => {
  const [segment, setSegment] = useState<Segment | null>(null)

  useEffect(() => {
    ;(async () => {
      const newSegment = await automatoApi.getSegment(segmentId)
      console.log('segment ->', newSegment)
      setSegment(newSegment)
    })()
  }, [])

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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const segmentId = query.id as string
  return { props: { segmentId } }
}

export default SegmentDetails
