import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { Title } from '../../../../ui-kit/Form'
import {
  Step1Atom,
  Step2Atom,
  Step3Atom,
  Step4Atom,
  Step5Atom,
} from '../../store'
import { OnEventSchedule } from '../models/Step5'

const StepView5 = () => {
  const [step1] = useAtom(Step1Atom)
  const [step2] = useAtom(Step2Atom)
  const [step3] = useAtom(Step3Atom)
  const [step4] = useAtom(Step4Atom)
  const [, setStep5] = useAtom(Step5Atom)
  // const [step5, setStep5] = useAtom(Step5Atom)

  useEffect(() => {
    if (step4.campaignSendType === 'on-event' && step4.onEventStep !== null) {
      setStep5({
        campaignDetails: {
          name: step1.campaignName,
          type: step1.campaignType,
          priority: step1.prioritization,

          segment: {
            name: '',
            id: step2.segmentId,
            holdoutPercent: step2.holdoutPercent,
          },

          message: {
            channel: step1.channel,
            contentType: '',
            inAppMessage: '',
            header: step3.messageHeader,
            body: step3.messageBody,
            pushNotificationUrl:
              step1.channel === 'push-notification'
                ? step3.pushNotificationUrl
                : null,
          },

          schedule: {
            triggerEvent: step4.onEventStep.triggerEvent,
            attributes: step4.onEventStep.attributes,
            metric: step4.onEventStep.metric,
            startTime: step4.onEventStep.startTime,
            endTime: step4.onEventStep.endTime,
            timezone: step4.onEventStep.timeZone,
          } as OnEventSchedule,
        },
      })
    }
  }, [])

  return (
    <div>
      <Title
        value="Review and launch"
        size="l"
        spacerSize="xxl"
        spacerPos="bot"
      />
      <Title value="Details" subTitle="Placeholder details here..." />
    </div>
  )
}

export default StepView5
