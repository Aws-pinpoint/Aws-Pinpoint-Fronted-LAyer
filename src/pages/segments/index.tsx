import { FunctionComponent } from 'react'
import Head from 'next/head'
import { EuiButton, EuiSpacer, EuiTitle } from '@elastic/eui'
// import SegmentsTable from '../../components/Segments/SegmentsTable'
import SegmentsTable from '../../ui-kit/Table'
import Link from 'next/link'
import useSegmentsTable from '../../hooks/Segments/useSegmentsTable'
import { SegmentsList } from '../../components/Segments/models'
import pinpoint from '../../api/pinpoint/client'

interface Props {
  segments: SegmentsList[]
}
const Segments: FunctionComponent = (props: Props) => {
  const [columns, dataStore] = useSegmentsTable(props.segments)

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

export async function getServerSideProps() {
  const segments = await pinpoint.getSegments()
  return { props: { segments } }
}

export default Segments
