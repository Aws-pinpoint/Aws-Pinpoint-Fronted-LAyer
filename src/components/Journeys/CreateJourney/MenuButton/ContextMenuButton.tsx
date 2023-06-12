import React, { useState } from 'react';
import {
  EuiButton,
  EuiContextMenu,
  EuiPopover,
  useGeneratedHtmlId,
} from '@elastic/eui';
import ModalTestComponent from './ButtonViews/ModalTest';

export default () => {
  const [isPopoverOpen, setPopover] = useState(false);

  //Modal Info
  const [isModalVisible, setIsModalVisible] = useState(false)
  const closeModal = () => setIsModalVisible(false)

  const contextMenuPopoverId = useGeneratedHtmlId({
    prefix: 'contextMenuPopover',
  });

  const onButtonClick = () => {
    setPopover(!isPopoverOpen);
  };

  const closePopover = () => {
    setPopover(false);
  };

  let modal

  const panels = [
    {
      id: 0,
      title: 'Actions',
      items: [
        {
          name: 'Test',
          onClick: () => {
            console.log(isModalVisible)
            setIsModalVisible(true)
          }
        },
        {
          name: 'Duplicate',
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
      <ModalTestComponent isVisible={isModalVisible} closeModal={closeModal} />
    </EuiPopover>
    </>
  );
};