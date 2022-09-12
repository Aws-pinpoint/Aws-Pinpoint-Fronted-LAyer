import StepView1 from './StepViews/StepView1'
import StepsProgress from './StepsProgress'
import { EuiButton } from '@elastic/eui'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { CampaignAtom, Step5Atom } from '../store'
import StepView2 from './StepViews/StepView2'
import StepView3 from './StepViews/StepView3'
import StepView4 from './StepViews/StepView4'
import StepView5 from './StepViews/StepView5'
import automatoApi from '../../../api/automato/client'
import { useToasts } from '../../Toasts/Toasts'
import { useRouter } from 'next/router'
import { CampaignsListAtom } from '../../../store/store'

const CreateCampaign = () => {
  const [campaign, setCampaign] = useAtom(CampaignAtom)
  const [step5] = useAtom(Step5Atom)
  const { setSuccess, setError } = useToasts()
  const router = useRouter()
  const [, setCampaignsList] = useAtom(CampaignsListAtom)

  return (
    <>
      <div className="flex mb-2">
        <StepsProgress className="w-2/12 mr-4" />
        <div className="w-10/12">
          {campaign.selectedStep === 'step1' && <StepView1 />}
          {campaign.selectedStep === 'step2' && <StepView2 />}
          {campaign.selectedStep === 'step3' && <StepView3 />}
          {campaign.selectedStep === 'step4' && <StepView4 />}
          {campaign.selectedStep === 'step5' && <StepView5 />}
        </div>
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
        {campaign.selectedStep !== 'step1' && (
          <EuiButton
            size="s"
            color="text"
            onClick={() => {
              setCampaign({ type: 'goPrevStep' })
            }}
          >
            Previous
          </EuiButton>
        )}
        {campaign.selectedStep === 'step5' ? (
          <EuiButton
            size="s"
            fill
            onClick={async () => {
              try {
                await automatoApi.createCampaign(step5.campaignDetails)

                const newCampaignsList = await automatoApi.getCampaigns()
                setCampaignsList(newCampaignsList)

                setSuccess(
                  'New campaign created',
                  `"${step5.campaignDetails.name}" is created successfully!`
                )

                router.push('/campaigns')
              } catch (err) {
                setError('Error creating campaign', err.message)
              }
            }}
          >
            Launch campaign
          </EuiButton>
        ) : (
          <EuiButton
            size="s"
            fill
            onClick={() => {
              setCampaign({ type: 'goNextStep' })
            }}
          >
            Next
          </EuiButton>
        )}
      </div>
    </>
  )
}

export default CreateCampaign
