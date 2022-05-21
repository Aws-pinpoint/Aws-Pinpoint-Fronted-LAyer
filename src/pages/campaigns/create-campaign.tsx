import Head from 'next/head'
import { EuiSpacer, EuiTitle } from '@elastic/eui'
import CreateCampaign from '../../components/Campaigns/CreateCampaign/CreateCampaign'

const CreateCampaignPage = () => {
  return (
    <>
      <Head>
        <title>Create a campaign</title>
      </Head>

      <CreateCampaign />
    </>
  )
}

export default CreateCampaignPage
