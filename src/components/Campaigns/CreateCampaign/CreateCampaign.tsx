import StepView1 from './StepViews/StepView1'
import StepsProgress from './StepsProgress'
import { EuiButton } from '@elastic/eui'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { CampaignAtom } from '../store'
import StepView2 from './StepViews/StepView2'
import StepView3 from './StepViews/StepView3'
import StepView4 from './StepViews/StepView4'
import StepView5 from './StepViews/StepView5'

const CreateCampaign = () => {
  const [campaign, setCampaign] = useAtom(CampaignAtom)

  return (
    <>
      <div className="flex mb-2">
        <StepsProgress className="w-2/12 mr-4" />
        {campaign.selectedStep === 'step1' && <StepView1 />}
        {campaign.selectedStep === 'step2' && <StepView2 />}
        {campaign.selectedStep === 'step3' && <StepView3 />}
        {campaign.selectedStep === 'step4' && <StepView4 />}
        {campaign.selectedStep === 'step5' && <StepView5 />}
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