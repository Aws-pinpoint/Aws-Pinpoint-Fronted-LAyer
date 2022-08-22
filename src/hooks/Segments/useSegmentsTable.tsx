import { EuiLink } from '@elastic/eui'
import Link from 'next/link'
import { SegmentsList } from '../../components/Segments/models'

const useSegmentsTable = (segments: SegmentsList[]) => {
  const columns = [
    { id: 'Segment Name' },
    { id: 'Type' },
    { id: 'Segment ID' },
    { id: 'Last modified date' },
  ]
  const dataStore = []

  segments.forEach(segment => {
    dataStore.push({
      ['Segment Name']: (
        <Link href={`/segments/details/${segment.id}`} passHref>
          <EuiLink>
            {segment.name !== undefined ? segment.name : 'Unnamed'}
          </EuiLink>
        </Link>
      ),
      ['Type']: segment.type,
      ['Segment ID']: segment.id,
      ['Last modified date']: new Date(segment.lastModified).toLocaleString(),
    })
  })
  // for (let i = 1; i <= 3; i++) {
  //   dataStore.push({
  //     ['Segment Name']: faker.fake('{{commerce.product}}'),
  //     ['Type']: 'Dynamic',
  //     ['Segment ID']: faker.fake('{{datatype.uuid}}'),
  //     ['Last modified date']: faker.fake('{{date.past}}'),
  //   })
  // }

  return [columns, dataStore]
}

export default useSegmentsTable
