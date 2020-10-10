// @flow
import {StyleSheet} from 'react-native';

import {screenHeight} from '../../utilities/platform';

import colors from '../../styles/colors';

export const maxContainerHeight = (2 / 3) * screenHeight;
export const animationDuration = 300;

export default StyleSheet.create({
  container: {
    borderColor: '#E0E0E0',
    borderTopWidth: 1,
    elevation: 7,
    shadowColor: 'rgba(0,0,0, 0.11)',
    shadowOffset: {
      height: -1,
      width: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 7,
    backgroundColor: colors.WHITE,
    maxHeight: maxContainerHeight,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
