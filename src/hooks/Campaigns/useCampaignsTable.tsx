import faker from '@faker-js/faker'

const useCampaignsTable = () => {
  const columns = [
    { id: 'Campaign name' },
    { id: 'Campaign id' },
    { id: 'Channel' },
    { id: 'Type' },
    { id: 'Priority' },
    { id: 'Schedule' },
    { id: 'Created date' },
    { id: 'Status' },
    { id: 'Last run result' },
  ]
  const dataStore = []
  for (let i = 1; i <= 3; i++) {
    dataStore.push({
      ['Campaign name']: faker.fake('{{commerce.product}}'),
      ['Campaign id']: faker.fake('{{datatype.uuid}}'),
      ['Channel']: faker.fake('{{database.engine}}'),
      ['Type']: 'Dynamic',
      ['Priority']: 'Urgent',
      ['Schedule']: faker.fake('{{date.future}}'),
      ['Created date']: faker.fake('{{date.past}}'),
      ['Status']: 'Pending',
      ['Last run result']: 'Success',
    })
  }

  return [columns, dataStore]
}

export default useCampaignsTable
