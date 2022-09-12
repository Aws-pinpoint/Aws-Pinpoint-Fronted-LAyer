import { FunctionComponent } from 'react'
import Head from 'next/head'
import { EuiButton, EuiSpacer, EuiTitle } from '@elastic/eui'
import SegmentsTable from '../../ui-kit/Table'
import Link from 'next/link'
import useCampaignsTable from '../../hooks/Campaigns/useCampaignsTable'
import { ProtectPage } from '../../components/Auth/ProtectPage'
import useCampaignsList from '../../hooks/Campaigns/useCampaignsList'

const Campaigns: FunctionComponent = () => {
  const [campaignsList] = useCampaignsList()
  const [columns, dataStore] = useCampaignsTable(campaignsList)

  return (
    <ProtectPage>
      <Head>
        <title>Campaigns</title>
      </Head>

      <div>
        <EuiTitle size="l">
          <h2>Campaigns</h2>
        </EuiTitle>

        <EuiSpacer size="xl" />
        <div className="flex flex-row-reverse mb-2">
          <Link href="/campaigns/create-campaign" passHref>
            <EuiButton fill>Create a campaign</EuiButton>
          </Link>
        </div>
        <SegmentsTable columns={columns} dataStore={dataStore} />
      </div>
    </ProtectPage>
  )
}

export default Campaigns
