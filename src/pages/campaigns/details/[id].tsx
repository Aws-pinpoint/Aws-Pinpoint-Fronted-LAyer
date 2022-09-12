import Head from 'next/head'
import { EuiTitle } from '@elastic/eui'
import { ProtectPage } from '../../../components/Auth/ProtectPage'
import { useEffect, useState } from 'react'
import automatoApi from '../../../api/automato/client'
import { GetServerSideProps } from 'next'
import { useToasts } from '../../../components/Toasts/Toasts'
import { CampaignDetails } from '../../../components/Campaigns/CreateCampaign/models/Step5'
import CampaignDetailsComponent from '../../../components/Campaigns/CampaignsDetailsComponent'

const CampaignDetailsPage = ({ campaignId }: { campaignId: string }) => {
  const [campaign, setCampaign] = useState<CampaignDetails | null>(null)

  const { setError } = useToasts()
  useEffect(() => {
    ;(async () => {
      try {
        const newCampaign = await automatoApi.getCampaign(campaignId)
        console.log(newCampaign)

        setCampaign(newCampaign)
      } catch (err) {
        setError('Error getting campaign', err.message)
      }
    })()
  }, [])

  return (
    <ProtectPage>
      <Head>
        <title>Segment Details - x</title>
      </Head>

      <EuiTitle size="l">
        <h2>Campaign Details: </h2>
      </EuiTitle>

      {campaign !== null && (
        <CampaignDetailsComponent campaignDetails={campaign} />
      )}
    </ProtectPage>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const campaignId = query.id as string
  return { props: { campaignId } }
}

export default CampaignDetailsPage
