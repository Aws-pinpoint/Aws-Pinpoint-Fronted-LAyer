import React, { useState } from 'react'
import {
  EuiModal,
  EuiModalHeader,
  EuiModalBody,
  useGeneratedHtmlId,
  EuiConfirmModal,
} from '@elastic/eui'
import Link from 'next/link'

const ModalDuplicateComponent = ({ isVisible, closeModal }) => {
  return (
    <div>
      {isVisible && (
        <EuiConfirmModal
          title="Duplicate Journey"
          onCancel={closeModal}
          onConfirm={closeModal}
          cancelButtonText="Cancel"
          confirmButtonText="Copy"
          defaultFocusedButton="confirm"
        >
          <p>
            When you duplicate this journey, Amazon Pinpoint creates a new
            journey with exactly the same activities and configuration. The new
            journey is created in draft mode. You have to publish the new
            journey before new participants are added to it.
          </p>
        </EuiConfirmModal>
      )}
    </div>
  )
}

export default ModalDuplicateComponent
