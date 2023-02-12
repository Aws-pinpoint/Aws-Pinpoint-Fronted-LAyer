import { FunctionComponent } from 'react'
import Head from 'next/head'
import { EuiButton, EuiPageHeader, EuiSpacer } from '@elastic/eui'
// import SegmentsTable from '../../components/Segments/SegmentsTable'
import SegmentsTable from '../../ui-kit/Table'
import Link from 'next/link'
import useSegmentsTable from '../../hooks/Segments/useSegmentsTable'
import { ProtectPage } from '../../components/Auth/ProtectPage'
import useSegmentsList from '../../hooks/Segments/useSegmentsList'

const Segments: FunctionComponent = () => {
  const [segmentsList] = useSegmentsList()
  const [columns, dataStore] = useSegmentsTable(segmentsList)

  return (
    <ProtectPage>
      <Head>
        <title>Automoato - Segments</title>
      </Head>

      <EuiPageHeader
        bottomBorder
        pageTitle="Segments"
        iconType="outlierDetectionJob"
        rightSideItems={[
          <Link
            key="create-segment-action"
            href="/segments/create-segment"
            passHref
          >
            <EuiButton fill>Create a segment</EuiButton>
          </Link>,
        ]}
      />
      <EuiSpacer size="m" />

      <SegmentsTable columns={columns} dataStore={dataStore} />
    </ProtectPage>
  )
}

export default Segments
