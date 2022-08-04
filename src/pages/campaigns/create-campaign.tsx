import Head from 'next/head'
import CreateCampaign from '../../components/Campaigns/CreateCampaign/CreateCampaign'
import { SegmentsList } from '../../components/Segments/models'
import { SegmentsListAtom } from '../../components/Campaigns/store'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import automatoApi from '../../api/automato/client'
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

interface Props {
  segmentsJson: string
}
const CreateCampaignPage = (props: Props) => {
  const [, setSegmentsList] = useAtom(SegmentsListAtom)
  useEffect(() => {
    setSegmentsList(JSON.parse(props.segmentsJson) as SegmentsList[])
  }, [props.segmentsJson])

  return (
    <ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth>
      <Head>
        <title>Create a campaign</title>
      </Head>

      <CreateCampaign />
    </ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth>
  )
}

export async function getServerSideProps() {
  const segments = await automatoApi.getSegments()
  return { props: { segmentsJson: JSON.stringify(segments) } }
}

export default CreateCampaignPage
