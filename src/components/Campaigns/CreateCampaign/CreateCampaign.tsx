import StepView1 from './StepView1'
import StepsUI from './StepsUI'

const CreateCampaign = () => {
  return (
    <>
      <div className="flex">
        <StepsUI className="w-2/12 mr-4" />
        <StepView1 />
      </div>
    </>
  )
}

export default CreateCampaign
