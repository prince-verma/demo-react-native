import styles from './src/styles';
import COLOR from './src/styles/colors';

export default {
  SERVER_NATIVE_URL: 'http://localhost:7070',
  SERVER_SOCKET_URL: 'http://localhost:7900',
  USERNAME_REGEX: /^[A-Za-z0-9.]+(?:[_$-][A-Za-z0-9.]+)*$/,
  defaultNavigationOptions: {
    headerMode: 'float',
    headerStyle: styles.bgApp,
    headerBackTitleStyle: COLOR.WHITE,
    headerTintColor: COLOR.WHITE,
    headerTitleStyle: styles.cWhite,
  },
};
