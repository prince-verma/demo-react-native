import React from 'react';
import {View} from 'react-native';

import Modal from 'react-native-modal';

import styles, {animationDuration} from './styles';

export default function ModalComponent(props) {
  const {children, isVisible, onBackDropPress} = props;

  return (
    <Modal
      animationInTiming={animationDuration}
      animationOutTiming={animationDuration}
      backdropColor="white"
      isVisible={isVisible}
      onBackdropPress={onBackDropPress}
      onBackButtonPress={onBackDropPress}
      style={styles.modal}>
      <View style={styles.container}>{children}</View>
    </Modal>
  );
}

ModalComponent.defaultProps = {};
