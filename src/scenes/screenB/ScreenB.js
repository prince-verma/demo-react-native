import React, {useEffect} from 'react';
import moment from 'moment';
import {View, Text, Button} from 'react-native';

import Loader from '../../commonComponents/Loader';

import styles from './styles';

const apiInterval = 30 * 1000;

export default function ScreenB(props) {
  const {
    initData,
    isLoading,
    openCardDetailsModal,
    btnText,
    id,
    modalText,
    data: {datetime},
  } = props;

  useEffect(() => {
    initData();
    const interval = setInterval(() => {
      initData();
    }, apiInterval);
    return () => clearInterval(interval);
  }, [initData]);

  if (!id || (isLoading && !datetime)) {
    return <Loader />;
  }

  const dateString = `Date: ${moment(datetime).format('DD MMMM, YYYY')}`;
  const timeString = `Time: ${moment(datetime).format('hh:mm A')}`;

  return (
    <View style={styles.container}>
      <Text>{modalText}</Text>
      <Button onPress={() => openCardDetailsModal(id)} title={btnText} />
      <Text>{dateString}</Text>
      <Text>{timeString}</Text>
    </View>
  );
}
