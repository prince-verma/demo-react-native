import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

export const Constants = {
  imageSize: 56,
};

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.WHITE,
  },
  cardStyle: {
    padding: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FDFDFD',
  },
  image: {
    height: Constants.imageSize,
    width: Constants.imageSize,
  },
});
