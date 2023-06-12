/*import Head from 'next/head'
import { EuiTitle } from '@elastic/eui'
import { ProtectPage } from '../../../components/Auth/ProtectPage'
import { useEffect, useState } from 'react'
import { Segment } from '../../../components/Segments/CreateSegment/models'
import automatoApi from '../../../api/automato/client'
import { GetServerSideProps } from 'next'
import { Title } from '../../../ui-kit/Form'
import { useToasts } from '../../../components/Toasts/Toasts'

const JourneyDetails = ({ journeyId }: { journeyId: string }) => {
  const [segment, setSegment] = useState<Segment | null>(null)

  const { setError } = useToasts()
  useEffect(() => {
    ;(async () => {
      try {
        const newSegment = await automatoApi.getSegment(segmentId)
        console.log(newSegment)

        setSegment(newSegment)
      } catch (err) {
        setError('Error getting segment', err.message)
      }
    })()
  }, [])

  return (
    <ProtectPage>
      <Head>
        <title>Automoato - Journey Details - x</title>
      </Head>

      <EuiTitle size="l">
        <h2>Segment Details: </h2>
      </EuiTitle>
    </ProtectPage>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const segmentId = query.id as string
  return { props: { segmentId } }
}

export default SegmentDetails */
