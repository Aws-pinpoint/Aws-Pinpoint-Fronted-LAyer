import { EuiSteps } from '@elastic/eui'
import { useAtom } from 'jotai'
import { SelectedStep, StepProgressStatus } from './models/models'
import { CampaignAtom } from '../store'

//TODO: consider moving views logic here...

interface StepDescriptionProps {
  index: number
  status: StepProgressStatus
}
const StepDescription = ({ index, status }: StepDescriptionProps) => {
  const [, setCampaign] = useAtom(CampaignAtom)

  const stepsDescriptions = [
    'Create a campaign',
    'Choose a segment',
    'Create your message',
    'Choose when to send the campaign',
    'Review and launch',
  ]

  return (
    <div
      key={`step-desc-${index}`}
      className={`${
        ['complete', 'incomplete'].includes(status) &&
        'hover:underline hover:cursor-pointer'
      } select-none`}
      onClick={() => {
        if (['complete', 'incomplete'].includes(status)) {
          setCampaign({
            type: 'goToStep',
            goToStep: `step${index + 1}` as SelectedStep,
          })
        }
      }}
    >
      {stepsDescriptions[index]}
    </div>
  )
}

interface Props {
  className?: string
}
const StepsProgress = ({ className }: Props) => {
  const [campaign] = useAtom(CampaignAtom)

  return (
    <EuiSteps
      className={`${className} border-solid border-0 border-r-2 border-slate-300`}
      titleSize="xs"
      steps={campaign.stepsProgress.map((stepProgress, i) => {
        return {
          title: stepProgress.title,
          status: stepProgress.status,
          children: <StepDescription index={i} status={stepProgress.status} />,
        }
      })}
    />
  )
}

export default StepsProgress
