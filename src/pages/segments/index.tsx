import { FunctionComponent } from 'react'
import Head from 'next/head'
import { EuiButton, EuiSpacer, EuiTitle } from '@elastic/eui'
// import SegmentsTable from '../../components/Segments/SegmentsTable'
import SegmentsTable from '../../ui-kit/Table'
import Link from 'next/link'
import useSegmentsTable from '../../hooks/Segments/useSegmentsTable'
import { SegmentsList } from '../../components/Segments/models'
import automatoApi from '../../api/automato/client'

interface Props {
  segmentsJson: string
}
// const Segments: NextPage<Props> = (props: Props) => {
const Segments: FunctionComponent = (props: Props) => {
  const [columns, dataStore] = useSegmentsTable(
    JSON.parse(props.segmentsJson) as SegmentsList[]
  )

  return (
    <>
      <Head>
        <title>Segments</title>
      </Head>

      <div>
        <EuiTitle size="l">
          <h2>Segments</h2>
        </EuiTitle>

        <EuiSpacer size="xl" />
        <div className="flex flex-row-reverse mb-2">
          <Link href="/segments/create-segment" passHref>
            <EuiButton fill>Create a segment</EuiButton>
          </Link>
        </div>
        <SegmentsTable columns={columns} dataStore={dataStore} />
      </div>
    </>
  )
}

/* Segments.getInitialProps = async () => {
  const segments = await pinpoint.getSegments()
  return { segmentsJson: JSON.stringify(segments) }
} */

export async function getServerSideProps() {
  const segments = await automatoApi.getSegments()
  return { props: { segmentsJson: JSON.stringify(segments) } }
}

export default Segments
