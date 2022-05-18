import faker from '@faker-js/faker'

const useSegmentsTable = () => {
  const columns = [
    { id: 'Segment Name' },
    { id: 'Type' },
    { id: 'Segment ID' },
    { id: 'Last modified date' },
  ]
  const dataStore = []
  for (let i = 1; i <= 3; i++) {
    dataStore.push({
      ['Segment Name']: faker.fake('{{commerce.product}}'),
      ['Type']: 'Dynamic',
      ['Segment ID']: faker.fake('{{datatype.uuid}}'),
      ['Last modified date']: faker.fake('{{date.past}}'),
    })
  }

  return [columns, dataStore]
}

export default useSegmentsTable
