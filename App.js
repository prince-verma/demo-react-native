import React from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import styles from './src/styles';
import COLOR from './src/styles/colors';
import AppEntry from './src/scenes';
import ActionSheet from './src/components/actionSheet';

import store from './src/redux/store';
import {navigationRef, isReadyRef} from './src/redux/navigation/rootNavigation';

export default function App() {
  const handleOnReadyState = () => {
    isReadyRef.current = true;
  };

  return (
    <Provider store={store}>
      <NavigationContainer onReady={handleOnReadyState} ref={navigationRef}>
        <View style={styles.f1}>
          <StatusBar
            backgroundColor={COLOR.APP_DARK}
            barStyle="light-content"
          />
          <AppEntry />
          <ActionSheet />
        </View>
      </NavigationContainer>
    </Provider>
  );
}
