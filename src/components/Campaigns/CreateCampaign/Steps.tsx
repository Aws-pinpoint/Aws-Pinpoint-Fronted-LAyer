import { EuiSteps, EuiText } from '@elastic/eui'

interface Props {
  className?: string
}
const Steps = ({ className }: Props) => {
  return (
    <EuiSteps
      className={`${className} border-solid border-0 border-r-2 border-slate-300`}
      titleSize="xs"
      steps={[
        {
          title: 'Step 1',
          children: <p>Create a campaign</p>,
          status: 'complete',
        },
        {
          title: 'Step 2',
          children: <p>Choose a segment</p>,
          status: 'current',
        },
        {
          title: 'Step 3',
          children: <p>Create your message</p>,
          status: 'disabled',
        },
        {
          title: 'Step 4',
          children: <p>Choose when to send the campaign</p>,
          status: 'disabled',
        },
        {
          title: 'Step 5',
          children: <p>Review and launch</p>,
          status: 'disabled',
        },
      ]}
    />
  )
}

export default Steps
