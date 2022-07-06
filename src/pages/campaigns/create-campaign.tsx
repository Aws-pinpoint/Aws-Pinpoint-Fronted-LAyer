import Head from 'next/head'
import CreateCampaign from '../../components/Campaigns/CreateCampaign/CreateCampaign'
import pinpoint from '../../api/pinpoint/client'
import { SegmentsList } from '../../components/Segments/models'
import { SegmentsListAtom } from '../../components/Campaigns/store'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

interface Props {
  segmentsJson: string
}
const CreateCampaignPage = (props: Props) => {
  const [, setSegmentsList] = useAtom(SegmentsListAtom)
  useEffect(() => {
    setSegmentsList(JSON.parse(props.segmentsJson) as SegmentsList[])
  }, [props.segmentsJson])

  return (
    <>
      <Head>
        <title>Create a campaign</title>
      </Head>

      <CreateCampaign />
    </>
  )
}

export async function getServerSideProps() {
  const segments = await pinpoint.getSegments()
  return { props: { segmentsJson: JSON.stringify(segments) } }
}

export default CreateCampaignPage
