import { FunctionComponent } from 'react'
import Head from 'next/head'
import { EuiButton, EuiSpacer, EuiTitle } from '@elastic/eui'
// import SegmentsTable from '../../components/Segments/SegmentsTable'
import SegmentsTable from '../../ui-kit/Table'
import Link from 'next/link'
import useSegmentsTable from '../../hooks/Segments/useSegmentsTable'

const Segments: FunctionComponent = () => {
  const [columns, dataStore] = useSegmentsTable()

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

export default Segments
