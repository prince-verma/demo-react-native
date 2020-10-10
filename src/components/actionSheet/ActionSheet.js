import React from 'react';

import Modal from '../../commonComponents/modal';

import {
  ActionSheetViewMap,
  ActionSheetViewExtraPropsMap,
} from '../../constants/actionSheet';

export default function ActionSheet(props) {
  const {open, viewTypeData, handleDismiss} = props;
  const {viewType, viewProps} = viewTypeData || {};
  const extraProps = ActionSheetViewExtraPropsMap[viewType];
  const Component = ActionSheetViewMap[viewType];

  const closeSheet = () => handleDismiss();

  return (
    <Modal isVisible={open} onBackDropPress={closeSheet}>
      {Component && (
        <Component
          handleCloseSheet={closeSheet}
          {...viewProps}
          {...extraProps}
        />
      )}
    </Modal>
  );
}
