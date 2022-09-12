import { EuiLink } from '@elastic/eui'
import Link from 'next/link'
import { CampaignsList } from '../../components/Campaigns/models'

const useCampaignsTable = (campaignsList: CampaignsList[]) => {
  const columns = [
    { id: 'Campaign name' },
    { id: 'Campaign id' },
    { id: 'Channel' },
    { id: 'Type' },
    { id: 'Priority' },
    { id: 'Schedule' },
    { id: 'Created date' },
    { id: 'Status' },
    // { id: 'Last run result' },
  ]
  const dataStore = []

  campaignsList.forEach(campaign => {
    dataStore.push({
      ['Campaign name']: (
        <Link href={`/campaigns/details/${campaign.id}`} passHref>
          <EuiLink>
            {campaign.name !== undefined ? campaign.name : 'Unnamed'}
          </EuiLink>
        </Link>
      ),
      ['Campaign id']: campaign.id,
      ['Channel']: campaign.channel,
      ['Type']: campaign.type,
      ['Priority']: campaign.priority,
      ['Schedule']: campaign.schedule,
      ['Created date']: campaign.createdDate,
      ['Status']: campaign.status,
      // ['Last run result']: 'Success',
    })
  })

  return [columns, dataStore]
}

export default useCampaignsTable
