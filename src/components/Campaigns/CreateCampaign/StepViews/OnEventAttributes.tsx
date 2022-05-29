import { EuiButton, EuiButtonIcon, EuiFieldText } from '@elastic/eui'
import cloneDeep from 'clone-deep'
import { useAtom } from 'jotai'
import { Step4Atom } from '../../store'
import { defaultOnEventAttribute } from '../models/Step4'

const OnEventAttributes = () => {
  const [step4, setStep4] = useAtom(Step4Atom)
  return (
    <div className="mb-8">
      {step4.onEventStep.attributes.map((attribute, attributeIndex) => (
        <div key={`attribute-${attributeIndex}`} className="mb-4 flex">
          <div className="mr-8">
            {attributeIndex === 0 && (
              <p>
                <b>Attribute</b>
              </p>
            )}
            <EuiFieldText
              placeholder="Attribute"
              value={attribute.attribute}
              onChange={e => {
                const step4Copy = cloneDeep(step4)
                step4Copy.onEventStep.attributes[attributeIndex].attribute =
                  e.target.value
                setStep4(step4Copy)
              }}
            />
          </div>
          <div>
            {attributeIndex === 0 && (
              <p>
                <b>Value</b>
              </p>
            )}
            <EuiFieldText
              placeholder="Value"
              value={attribute.value}
              onChange={e => {
                const step4Copy = cloneDeep(step4)
                step4Copy.onEventStep.attributes[attributeIndex].value =
                  e.target.value
                setStep4(step4Copy)
              }}
            />
          </div>
          {attributeIndex !== 0 && (
            <EuiButtonIcon
              // display="fill"
              size="s"
              iconType="cross"
              color="danger"
              aria-label="Remove segment group"
              className="self-end ml-2"
              onClick={() => {
                const step4Copy = cloneDeep(step4)
                step4Copy.onEventStep.attributes =
                  step4Copy.onEventStep.attributes.filter(
                    (_, i) => i !== attributeIndex
                  )
                setStep4(step4Copy)
              }}
            />
          )}
        </div>
      ))}
      <EuiButton
        size="s"
        fill
        onClick={() => {
          setStep4(prev => ({
            ...prev,
            onEventStep: {
              ...prev.onEventStep,
              attributes: [
                ...prev.onEventStep.attributes,
                defaultOnEventAttribute,
              ],
            },
          }))
        }}
      >
        Add new attribute
      </EuiButton>
    </div>
  )
}

export default OnEventAttributes
