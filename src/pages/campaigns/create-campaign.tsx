import Head from 'next/head'
import { EuiSpacer, EuiTitle } from '@elastic/eui'
import CreateCampaign from '../../components/Campaigns/CreateCampaign/CreateCampaign'

const CreateCampaignPage = () => {
  return (
    <>
      <Head>
        <title>Create a campaign</title>
      </Head>

      <div>
        <EuiTitle size="l">
          <h2>Create a campaign</h2>
        </EuiTitle>
        <EuiSpacer size="xl" />
        <EuiSpacer size="m" />
        <CreateCampaign />
      </div>
    </>
  )
}

export default CreateCampaignPage
