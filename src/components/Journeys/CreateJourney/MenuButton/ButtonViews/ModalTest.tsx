import React, { useState } from 'react'
import {
  EuiModal,
  EuiModalHeader,
  EuiModalBody,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
  EuiButton,
  EuiSelect,
  EuiText,
  EuiButtonEmpty,
  useGeneratedHtmlId,
  EuiCheckbox,
  EuiFieldNumber,
} from '@elastic/eui'
import Link from 'next/link'

const ModalTestComponent = ({ isVisible, closeModal }) => {
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState(false)
  const basicCheckboxId = useGeneratedHtmlId({ prefix: 'basicCheckbox' })
  const onChange = e => {
    setChecked(e.target.checked)
  }
  return (
    <div>
      {isVisible && (
        <EuiModal onClose={closeModal}>
          <EuiModalHeader>Test this journey</EuiModalHeader>
          <EuiModalBody>
            <EuiForm component="form">
              <EuiFormRow
                label="Test Segment"
                helpText="Choose a test segment to send your message to."
              >
                <EuiSelect
                  onChange={() => {}}
                  options={[{ value: 'Test', text: 'Test' }]}
                />
              </EuiFormRow>
              <EuiText size="xs" className="py-2">
                This list only includes the most recently modified segments for
                the current project.
              </EuiText>
              <Link href="/segments/create-segment">
                <EuiButtonEmpty>Build a segment</EuiButtonEmpty>
              </Link>
              <EuiFormRow helpText="If you choose this option, test participants will proceed through each activity in the journey without any delays between activities.">
                <EuiCheckbox
                  id={basicCheckboxId}
                  label="Skip all waits and delays"
                  checked={checked}
                  onChange={e => onChange(e)}
                />
              </EuiFormRow>
              <EuiSpacer />
              {!checked && (
                <EuiFieldNumber
                  placeholder="Custom wait time (in hours)"
                  value={value}
                  onChange={e => onChange(e)}
                  aria-label="Use aria labels when no actual label is in use"
                />
              )}

              <EuiSpacer />
              <div className="flex justify-end">
                <EuiButton type="submit" fill>
                  Save form
                </EuiButton>
              </div>
            </EuiForm>
          </EuiModalBody>
        </EuiModal>
      )}
    </div>
  )
}

export default ModalTestComponent
