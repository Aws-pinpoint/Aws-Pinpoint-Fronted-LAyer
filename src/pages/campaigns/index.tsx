import { FunctionComponent } from 'react'
import Head from 'next/head'
import { EuiButton, EuiPageHeader, EuiSpacer } from '@elastic/eui'
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
        <title>Automoato - Campaigns</title>
      </Head>

      <div>
        <EuiPageHeader
          bottomBorder
          pageTitle="Campaigns"
          iconType="bell"
          rightSideItems={[
            <Link
              key="create-campaign-action"
              href="/campaigns/create-campaign"
              passHref
            >
              <EuiButton fill>Create a campaign</EuiButton>
            </Link>,
          ]}
        />
        <EuiSpacer size="m" />

        <SegmentsTable columns={columns} dataStore={dataStore} />
      </div>
    </ProtectPage>
  )
}

export default Campaigns
