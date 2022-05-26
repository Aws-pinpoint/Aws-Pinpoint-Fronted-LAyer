import StepView1 from './StepView1'
import StepsProgress from './StepsProgress'
import { EuiButton } from '@elastic/eui'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { CampaignAtom } from '../store'

const CreateCampaign = () => {
  const [campaign, setCampaign] = useAtom(CampaignAtom)

  return (
    <>
      <div className="flex mb-2">
        <StepsProgress className="w-2/12 mr-4" />
        {campaign.selectedStep === 'step1' && <StepView1 />}
      </div>
      <div className="flex gap-2 justify-end">
        <Link href="/campaigns" passHref>
          <EuiButton
            size="s"
            onClick={() => {
              setCampaign({ type: 'empty' })
            }}
          >
            Cancel
          </EuiButton>
        </Link>
        <EuiButton
          size="s"
          fill
          onClick={() => {
            setCampaign({ type: 'goNextStep' })
          }}
        >
          Next
        </EuiButton>
      </div>
    </>
  )
}

export default CreateCampaign
