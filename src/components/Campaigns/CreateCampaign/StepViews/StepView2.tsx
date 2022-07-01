import { EuiFieldNumber, EuiSpacer, EuiSuperSelect } from '@elastic/eui'
import { useAtom } from 'jotai'
import { Title } from '../../../../ui-kit/Form'
import { Step2Atom } from '../../store'

const StepView2 = () => {
  const [step2, setStep2] = useAtom(Step2Atom)

  return (
    <div>
      <Title
        value="Choose a segment"
        size="l"
        spacerSize="xxl"
        spacerPos="bot"
      />

      <Title value="Segment details" size="s" spacerPos="bot" spacerSize="xs" />
      <Title value="Segment" />
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
        valueOfSelected={step2.segmentName}
        defaultValue=""
        onChange={val => {
          setStep2(prev => ({
            ...prev,
            segmentName: val,
          }))
        }}
      />

      <EuiSpacer size="xxl" />

      <Title
        value="Segment hold-out - optional"
        size="s"
        spacerPos="bot"
        spacerSize="s"
        subTitle="The percentage of customers from the chosen segment who won't receive messages from this campaign."
      />
      <div className="flex items-center">
        <div className="w-24 mr-2">
          <EuiFieldNumber
            placeholder="Placeholder text"
            value={step2.holdoutPercent}
            onChange={e => {
              const newHoldout = Number(e.target.value)
              // if (!isNaN(newHoldout) && newHoldout >= 100) {
              setStep2(prev => ({ ...prev, holdoutPercent: newHoldout }))
              // }
            }}
          />
        </div>
        <p className="text-xl font-bold">%</p>
      </div>
    </div>
  )
}

export default StepView2
