import {
  EuiFieldNumber,
  EuiFieldText,
  EuiSelect,
  EuiSuperSelect,
} from '@elastic/eui'
import { useAtom } from 'jotai'
import { ChangeEvent } from 'react'
import DatePicker from '../../../../ui-kit/DatePicker'
import { Title } from '../../../../ui-kit/Form'
import { Step4Atom } from '../../store'
import { MetricOperator, metricOperatorOptions } from '../models/Step4'
import OnEventAttributes from './OnEventAttributes'

const StepView4 = () => {
  const [step4, setStep4] = useAtom(Step4Atom)
  const handleTriggerEvent = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value
    setStep4(
      prev =>
        prev.campaignSendType === 'on-event' && {
          ...prev,
          onEventStep: {
            ...prev.onEventStep,
            triggerEvent: newVal,
          },
        }
    )
  }
  const handleMetricOperator = (e: ChangeEvent<HTMLSelectElement>) => {
    const newOperator = e.target.value as MetricOperator
    setStep4(
      prev =>
        prev.campaignSendType === 'on-event' && {
          ...prev,
          onEventStep: {
            ...prev.onEventStep,
            metric: {
              ...prev.onEventStep.metric,
              operator: newOperator,
            },
          },
        }
    )
  }
  const handleMetricValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value
    setStep4(
      prev =>
        prev.campaignSendType === 'on-event' && {
          ...prev,
          onEventStep: {
            ...prev.onEventStep,
            metric: {
              ...prev.onEventStep.metric,
              value: Number(newVal),
            },
          },
        }
    )
  }
  const handleMetricMetric = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value
    setStep4(
      prev =>
        prev.campaignSendType === 'on-event' && {
          ...prev,
          onEventStep: {
            ...prev.onEventStep,
            metric: {
              ...prev.onEventStep.metric,
              metric: newVal,
            },
          },
        }
    )
  }
  const handleStartTime = (newVal: number) => {
    setStep4(
      prev =>
        prev.campaignSendType === 'on-event' && {
          ...prev,
          onEventStep: {
            ...prev.onEventStep,
            startTime: newVal,
          },
        }
    )
  }
  const handleEndTime = (newVal: number) => {
    setStep4(
      prev =>
        prev.campaignSendType === 'on-event' && {
          ...prev,
          onEventStep: {
            ...prev.onEventStep,
            endTime: newVal,
          },
        }
    )
  }

  return (
    <div>
      <Title
        value="Choose when to send the campaign"
        size="l"
        spacerSize="xxl"
        spacerPos="bot"
      />
      {step4.campaignSendType === 'on-event' && step4.onEventStep !== null && (
        <>
          <Title
            value="Campaign setup"
            size="s"
            spacerPos="bot"
            // spacerSize="s"
          />
          <Title value="Trigger events" />
          <EuiFieldText
            placeholder="Choose an event"
            value={step4.onEventStep.triggerEvent}
            onChange={handleTriggerEvent}
          />

          <Title
            value="Attributes - optional"
            subTitle="Specify the event attributes that trigger the campaign."
            spacerPos="top"
          />
          <OnEventAttributes />

          <Title
            value="Metrics - optional"
            subTitle="Specify the event metrics that trigger the campaign."
            spacerPos="top"
          />
          <div className="mb-4 flex">
            <div className="mr-8">
              <b>Metric</b>
              <EuiFieldText
                placeholder="Choose an event metric"
                value={step4.onEventStep.metric.metric}
                onChange={handleMetricMetric}
              />
            </div>
            <div className="mr-8">
              <b>Operator</b>
              <EuiSelect
                options={metricOperatorOptions}
                value={step4.onEventStep.metric.operator}
                onChange={handleMetricOperator}
              />
            </div>
            <div>
              <b>Value</b>
              <EuiFieldNumber
                value={step4.onEventStep.metric.value}
                onChange={handleMetricValue}
              />
            </div>
          </div>

          <Title
            value="Campaign dates"
            subTitle="Specify start and end dates for the campaign. Amazon Pinpoint only sends the campaign if the event occurs after the start date and before the end date."
            spacerPos="top"
          />
          <DatePicker
            onStartChange={handleStartTime}
            onEndChange={handleEndTime}
          />
          <p className="text-slate-400">
            Automato stops processing events for this campaign as soon as the
            end date arrives (that is, at 12:00 AM on the end date).
          </p>

          <Title value="Time zone" spacerPos="top" />
          <EuiSuperSelect
            options={[
              {
                value: 'UTC+00:00',
                inputDisplay: <p>UTC+00:00 (UTC, GMT, WET) - Your time zone</p>,
              },
            ]}
            defaultValue="UTC+00:00"
            valueOfSelected="UTC+00:00"
          />
        </>
      )}
    </div>
  )
}

export default StepView4
