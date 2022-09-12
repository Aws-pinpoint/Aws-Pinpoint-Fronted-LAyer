import { SetStateAction, useAtom } from 'jotai'
import { useEffect } from 'react'
import automatoApi from '../../api/automato/client'
import { CampaignsList } from '../../components/Campaigns/models'
import { useToasts } from '../../components/Toasts/Toasts'
import { CampaignsListAtom } from '../../store/store'

const useCampaignsList = (): [
  CampaignsList[],
  (update?: SetStateAction<CampaignsList[]>) => void
] => {
  const { setError } = useToasts()
  const [campaignsList, setCampaignsList] = useAtom(CampaignsListAtom)

  useEffect(() => {
    ;(async () => {
      if (campaignsList.length === 0)
        try {
          const newCampaignsList = await automatoApi.getCampaigns()
          setCampaignsList(newCampaignsList)
        } catch (error) {
          setError('Error getting campaigns', error.message)
        }
    })()
  }, [])

  return [campaignsList, setCampaignsList]
}

export default useCampaignsList
