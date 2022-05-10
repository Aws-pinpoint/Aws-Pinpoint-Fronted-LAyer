import { FunctionComponent } from 'react'
import Head from 'next/head'
import { EuiSpacer, EuiTitle } from '@elastic/eui'
import SegmentsTable from '../components/Segments/SegmentsTable'
import X from '../components/Segments/x'

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

        <EuiSpacer size="l" />
        <SegmentsTable />
      </div>
    </>
  )
}

export default Segments
