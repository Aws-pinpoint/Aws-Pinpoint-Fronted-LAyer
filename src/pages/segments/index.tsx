import { FunctionComponent } from 'react'
import Head from 'next/head'
import { EuiButton, EuiSpacer, EuiTitle } from '@elastic/eui'
import SegmentsTable from '../../components/Segments/SegmentsTable'
import Link from 'next/link'

const Segments: FunctionComponent = () => {
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
        <SegmentsTable />
      </div>
    </>
  )
}

export default Segments
