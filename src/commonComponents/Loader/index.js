// @flow
import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import Colors from '../../styles/colors';
import styles from './styles';

const Loader = (): React$Node => {
  return (
    <View style={styles.rootContainer}>
      <ActivityIndicator color={Colors.APP_DARK} />
    </View>
  );
};
export default Loader;
