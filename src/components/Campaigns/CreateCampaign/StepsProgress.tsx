import { EuiSteps } from '@elastic/eui'
import { useAtom } from 'jotai'
import { CampaignAtom } from '../store'

interface Props {
  className?: string
}
const StepsProgress = ({ className }: Props) => {
  const [campaign] = useAtom(CampaignAtom)

  const StepPs = [
    <p key="step-desc-1">Create a campaign</p>,
    <p key="step-desc-2">Choose a segment</p>,
    <p key="step-desc-3">Create your message</p>,
    <p key="step-desc-4">Choose when to send the campaign</p>,
    <p key="step-desc-5">Review and launch</p>,
  ]
  return (
    <EuiSteps
      className={`${className} border-solid border-0 border-r-2 border-slate-300`}
      titleSize="xs"
      steps={campaign.stepsProgress.map((stepProgress, i) => {
        return {
          title: stepProgress.title,
          status: stepProgress.status,
          children: StepPs[i],
        }
      })}
    />
  )
}

export default StepsProgress
