import Head from 'next/head'
import CreateCampaign from '../../components/Campaigns/CreateCampaign/CreateCampaign'
import { ProtectPage } from '../../components/Auth/ProtectPage'

const CreateCampaignPage = () => {
  return (
    <ProtectPage>
      <Head>
        <title>Automoato - Create a campaign</title>
      </Head>

      <CreateCampaign />
    </ProtectPage>
  )
}

export default CreateCampaignPage
