import { ProtectPage } from '../../components/Auth/ProtectPage'
import Head from 'next/head'
import CreateJourney from '../../components/Journeys/CreateJourney/CreateJourney'


const CreateJourneyPage = () => {
  return (
    <ProtectPage>
      <Head>
        <title>Automoato - Create a Journey</title>
      </Head>

      <CreateJourney />
    </ProtectPage>
  )
}

export default CreateJourneyPage
