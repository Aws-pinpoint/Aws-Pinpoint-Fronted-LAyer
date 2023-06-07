import { EuiLink } from '@elastic/eui'
import Link from 'next/link'
import { JourneysList } from '../../components/Journeys/model'

const useSegmentsTable = (journeys: JourneysList[]) => {
  const columns = [
    { id: 'Journey Name' },
    { id: 'Last Modified' },
    { id: 'Creation Date' },
    { id: 'Status' },
    { id: 'ID' },
  ]
  const dataStore = []

  journeys.forEach(journey => {
    dataStore.push({
      ['Journey Name']: (
        <Link href={`/journeys/details/${journey.id}`} passHref>
          <EuiLink>
            {journey.name !== undefined ? journey.name : 'Unnamed'}
          </EuiLink>
        </Link>
      ),
      ['Segment ID']: journey.id,
      ['Status']: journey.status,
      ['Creation Date']: journey.creationDate,
      ['Last modified date']: new Date(journey.lastModified).toLocaleString(),
    })
  })

  return [columns, dataStore]
}

export default useSegmentsTable
