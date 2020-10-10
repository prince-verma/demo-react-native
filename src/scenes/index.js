import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import screenB from './screenB';
import screenA from './screenA';

import config from '../../config';
import {SCREEN_A, SCREEN_B} from '../constants/screenNameConstants';

const {Navigator, Screen} = createStackNavigator();

export default function App(props) {
  return (
    <Navigator
      screenOptions={config.defaultNavigationOptions}
      initialRouteName={SCREEN_A}>
      <Screen name={SCREEN_A} component={screenA} />
      <Screen name={SCREEN_B} component={screenB} />
    </Navigator>
  );
}

App.propTypes = {};
