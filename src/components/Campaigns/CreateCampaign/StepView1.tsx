import { EuiFieldText, EuiRadioGroup } from '@elastic/eui'
import { Title } from '../../../ui-kit/Form'
import {
  campaignTypeOptions,
  channelOptions,
  compareVariableOptions,
  prioritizationOptions,
} from '../models'

const StepView1 = () => {
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
      <EuiFieldText placeholder="Campaign Name" />

      <Title value="Campaign Type" spacerPos="top" />
      <EuiRadioGroup
        options={campaignTypeOptions.map(item => ({
          id: `campaignTypeOption-${item.value}`,
          ...item,
        }))}
        idSelected={'campaignTypeOption-standard'}
        onChange={() => {
          //pass
        }}
        // name={}
      />

      <Title value="Choose a variable to compare" spacerPos="top" />
      <EuiRadioGroup
        options={compareVariableOptions.map(item => ({
          id: `compareVariableOption-${item.value}`,
          ...item,
        }))}
        idSelected={'compareVariableOption-message-content'}
        onChange={() => {
          //pass
        }}
        // name={}
      />

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
        idSelected={'channelOption-email'}
        onChange={() => {
          //pass
        }}
        // name={}
      />

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
        idSelected={'prioritizationOption-very-important'}
        onChange={() => {
          //pass
        }}
        // name={}
      />
    </div>
  )
}

export default StepView1
