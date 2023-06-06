import React, { useState } from 'react';
import {
  EuiButton,
  EuiContextMenu,
  EuiPopover,
  useGeneratedHtmlId,
} from '@elastic/eui';

export default () => {
  const [isPopoverOpen, setPopover] = useState(false);

  const embeddedCodeSwitchId__1 = useGeneratedHtmlId({
    prefix: 'embeddedCodeSwitch',
    suffix: 'first',
  });
  const embeddedCodeSwitchId__2 = useGeneratedHtmlId({
    prefix: 'embeddedCodeSwitch',
    suffix: 'second',
  });
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
    <EuiPopover
      id={contextMenuPopoverId}
      button={button}
      isOpen={isPopoverOpen}
      closePopover={closePopover}
      panelPaddingSize="none"
      anchorPosition="downLeft"
    >
      <EuiContextMenu initialPanelId={0} panels={panels} />
    </EuiPopover>
  );
};