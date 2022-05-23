import { EuiFieldText, EuiRadioGroup } from '@elastic/eui'
import { useAtom } from 'jotai'
import { Title } from '../../../ui-kit/Form'
import {
  campaignTypeOptions,
  channelOptions,
  compareVariableOptions,
  prioritizationOptions,
} from '../models'
import { Step1Atom } from '../store'

const StepView1 = () => {
  const [step1, setStep1] = useAtom(Step1Atom)

  return (
    <div>
      <Title
        value="Create a campaign"
        size="l"
        spacerSize="xxl"
        spacerPos="bot"
      />

      <Title
        value="Campaign Name"
        subTitle="Campaign names can contain up to 64 characters."
      />
      <EuiFieldText
        placeholder="Campaign Name"
        value={step1.campaignName}
        onChange={e => {
          setStep1({ key: 'campaignName', val: e.target.value })
        }}
      />

      <Title value="Campaign Type" spacerPos="top" />
      <EuiRadioGroup
        options={campaignTypeOptions.map(item => ({
          id: `campaignTypeOption-${item.value}`,
          ...item,
        }))}
        idSelected={`campaignTypeOption-${step1.campaignType}`}
        onChange={(_, newVal) => {
          setStep1({ key: 'campaignType', val: newVal })
        }}
      />

      {step1.compareVariable !== null && (
        <>
          <Title value="Choose a variable to compare" spacerPos="top" />
          <EuiRadioGroup
            options={compareVariableOptions.map(item => ({
              id: `compareVariableOption-${item.value}`,
              ...item,
            }))}
            idSelected={`compareVariableOption-${step1.compareVariable}`}
            onChange={(_, newVal) => {
              setStep1({ key: 'compareVariable', val: newVal })
            }}
          />
        </>
      )}

      <Title
        value="Channel"
        subTitle="Choose a channel for this campaign."
        spacerPos="top"
      />
      <EuiRadioGroup
        options={channelOptions.map(item => ({
          id: `channelOption-${item.value}`,
          ...item,
        }))}
        idSelected={`channelOption-${step1.channel}`}
        onChange={(_, newVal) => {
          setStep1({ key: 'channel', val: newVal })
        }}
      />

      {step1.prioritization !== null && (
        <>
          <Title
            value="Set prioritization"
            subTitle="Label the importance of this in-app message campaign. The priority you set will determine what message will be shown at a certain trigger event."
            spacerPos="top"
          />
          <EuiRadioGroup
            options={prioritizationOptions.map(item => ({
              id: `prioritizationOption-${item.value}`,
              ...item,
            }))}
            idSelected={`prioritizationOption-${step1.prioritization}`}
            onChange={(_, newVal) => {
              setStep1({ key: 'prioritization', val: newVal })
            }}
          />
        </>
      )}
    </div>
  )
}

export default StepView1
