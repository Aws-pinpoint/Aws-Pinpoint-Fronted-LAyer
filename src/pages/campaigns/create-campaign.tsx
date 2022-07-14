import Head from 'next/head'
import CreateCampaign from '../../components/Campaigns/CreateCampaign/CreateCampaign'
import { SegmentsList } from '../../components/Segments/models'
import { SegmentsListAtom } from '../../components/Campaigns/store'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import automatoApi from '../../api/automato/client'

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
  const segments = await automatoApi.getSegments()
  return { props: { segmentsJson: JSON.stringify(segments) } }
}

export default CreateCampaignPage
