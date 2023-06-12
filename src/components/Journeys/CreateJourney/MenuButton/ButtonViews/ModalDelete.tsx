import React, { useState } from 'react'
import {
  EuiModal,
  EuiModalHeader,
  EuiModalBody,
  useGeneratedHtmlId,
  EuiConfirmModal,
} from '@elastic/eui'
import Link from 'next/link'

const ModalDeleteComponent = ({ isVisible, closeModal }) => {
  return (
    <div>
      {isVisible && (
        <EuiConfirmModal
          title="Delete Journey"
          onCancel={closeModal}
          onConfirm={closeModal}
          cancelButtonText="Cancel"
          confirmButtonText="Delete"
        >
          <p>
            When you delete a journey, it automatically and permanently ends for
            all participants. Deleting a journey also removes all of the
            analytics data for the journey.
          </p>
        </EuiConfirmModal>
      )}
    </div>
  )
}

export default ModalDeleteComponent
