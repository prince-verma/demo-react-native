import React from 'react';
import {Text, View, Button} from 'react-native';

import styles from './styles';

const sampleText =
  'I am a common modal.\n I animates from bottom.\n To close me tap outside the box.';

export default function CardDetails(props) {
  const {modalText, id, navigateToScreenB, showOpenModalBtn} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.sampleText}>{sampleText}</Text>
      <Text style={styles.text}>{modalText}</Text>
      {showOpenModalBtn && (
        <Button onPress={() => navigateToScreenB(id)} title="open screen-B" />
      )}
    </View>
  );
}
