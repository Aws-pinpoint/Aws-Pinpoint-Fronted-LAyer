import React, { useState } from 'react';
import {
  EuiButton,
  EuiContextMenu,
  EuiPopover,
  useGeneratedHtmlId,
} from '@elastic/eui';
import ModalTestComponent from './ButtonViews/ModalTest';
import ModalDuplicateComponent from './ButtonViews/ModalDuplicate';

export default () => {
  const [isPopoverOpen, setPopover] = useState(false);

  //Test Modal Info
  const [isTestModalVisible, setIsTestModalVisible] = useState(false)
  const closeTestModal = () => setIsTestModalVisible(false)

  //Duplicate Modal Info
  const [isDuplicateModalVisible, setIsDuplicateModalVisible] = useState(false)
  const closeDuplicateModal = () => setIsDuplicateModalVisible(false)

  const contextMenuPopoverId = useGeneratedHtmlId({
    prefix: 'contextMenuPopover',
  });

  const onButtonClick = () => {
    setPopover(!isPopoverOpen);
  };

  const closePopover = () => {
    setPopover(false);
  };

  const panels = [
    {
      id: 0,
      title: 'Actions',
      items: [
        {
          name: 'Test',
          onClick: () => {
            setIsTestModalVisible(true)
          }
        },
        {
          name: 'Duplicate',
          onClick: () => {
            setIsDuplicateModalVisible(true)
          }
        },
        {
          name: 'Delete',
        },
        {
          name: 'Settings',
        },
      ],
    },
  ];

  const button = (
    <EuiButton iconType="arrowDown" iconSide="right" onClick={onButtonClick}>
      Actions
    </EuiButton>
  );

  return (
    <>
    <EuiPopover
      id={contextMenuPopoverId}
      button={button}
      isOpen={isPopoverOpen}
      closePopover={closePopover}
      panelPaddingSize="none"
      anchorPosition="downLeft"
    >
      <EuiContextMenu initialPanelId={0} panels={panels} />
      <ModalTestComponent isVisible={isTestModalVisible} closeModal={closeTestModal} />
      <ModalDuplicateComponent isVisible={isDuplicateModalVisible} closeModal={closeDuplicateModal} />
    </EuiPopover>
    </>
  );
};