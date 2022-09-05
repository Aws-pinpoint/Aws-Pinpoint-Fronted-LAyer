import {
  EuiButton,
  EuiFieldText,
  EuiRadioGroup,
  EuiSuperSelect,
  EuiTextArea,
} from '@elastic/eui'
import { useAtom } from 'jotai'
import { Title } from '../../../../ui-kit/Form'
import { Step1Atom, Step3Atom } from '../../store'
import { TestMessageType, testMessageTypeOptions } from '../models/Step3'

const StepView3 = () => {
  const [step1] = useAtom(Step1Atom)
  const [step3, setStep3] = useAtom(Step3Atom)
  return (
    <div>
      <Title
        value="Create your message"
        size="l"
        spacerSize="xxl"
        spacerPos="bot"
      />
      {/*
      <EuiRadioGroup
        options={templateTypeOptions.map(item => ({
          id: `templateTypeOption-${item.value}`,
          ...item,
        }))}
        idSelected={`templateTypeOption-${step3.templateType}`}
        onChange={(_, newVal: TemplateType) => {
          setStep3(prev => ({ ...prev, templateType: newVal }))
        }}
      />
      <Title
        value="In-app messaging template"
        size="s"
        spacerPos="top"
        // spacerSize="s"
        subTitle="Template name"
      />
      <EuiButton size="s" fill>
        Choose a template
      </EuiButton>
      */}

      <Title value="Message header" />
      <EuiFieldText
        placeholder="Title"
        value={step3.messageHeader}
        onChange={e => {
          setStep3(prev => ({ ...prev, messageHeader: e.target.value }))
        }}
      />
      <Title value="Message Body" spacerPos="top" spacerSize="m" />
      <EuiTextArea
        placeholder="Content"
        value={step3.messageBody}
        onChange={e => {
          setStep3(prev => ({ ...prev, messageBody: e.target.value }))
        }}
      />

      {step1.channel === 'push-notification' && (
        <>
          <Title
            value="Push-notification go-to URL"
            spacerPos="top"
            spacerSize="m"
          />
          <EuiFieldText
            placeholder="eg: https://example.com"
            value={step3.pushNotificationUrl}
            onChange={e => {
              setStep3(prev => ({
                ...prev,
                pushNotificationUrl: e.target.value,
              }))
            }}
          />
        </>
      )}

      <Title
        value="Send a test message"
        size="s"
        spacerPos="top"
        // spacerSize="s"
        subTitle="Send a test message to a segment, or to specific recipients. Test messages don't count against your daily sending limits. However, you're billed for each message you send."
      />
      <Title value="Send a test message to" />
      <EuiRadioGroup
        options={testMessageTypeOptions.map(item => ({
          id: `testMessageTypeOption-${item.value}`,
          ...item,
        }))}
        idSelected={`testMessageTypeOption-${step3.testMessageType}`}
        onChange={(_, newVal: TestMessageType) => {
          setStep3(prev => ({
            ...prev,
            testMessageType: newVal,
            testMessage: '',
          }))
        }}
      />
      {step3.testMessageType === 'segment-name' && (
        <>
          <EuiSuperSelect
            options={[
              {
                value: 'test-segment-1',
                inputDisplay: <p>test-segment-1</p>,
              },
              {
                value: 'test-segment-2',
                inputDisplay: <p>test-segment-2</p>,
              },
            ]}
            valueOfSelected={step3.testMessage}
            defaultValue=""
            onChange={val => {
              setStep3(prev => ({
                ...prev,
                testMessage: val,
              }))
            }}
          />
          <p className="text-slate-400">
            This list only includes imported segments that contain 100 or fewer
            records.
          </p>
        </>
      )}
      {step3.testMessageType === 'endpoint-ids' && (
        <>
          <EuiFieldText
            placeholder="endpoint-id0, endpoint-id1, endpoint-id2"
            value={step3.testMessage}
            onChange={e => {
              setStep3(prev => ({ ...prev, testMessage: e.target.value }))
            }}
          />
          <p className="text-slate-400">
            You can send the preview message to up to 10 addresses.
          </p>
        </>
      )}
      <EuiButton size="s" fill className="mt-2">
        Send Message
      </EuiButton>
    </div>
  )
}

export default StepView3
