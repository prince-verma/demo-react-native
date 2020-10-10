import React, {useRef} from 'react';
import objectGet from 'lodash/get';
import {Button, Animated} from 'react-native';

import Card from '../../commonComponents/card';

import {screenHeight} from '../../utilities/platform';
import {images} from '../../assets';
import mockListData from '../../__mocks__/list.json';

import styles from './styles';

const ListItem = (props) => {
  const {openModal, id, btnText, animatedValue, index} = props;
  const onBtnPress = () => openModal(id);

  const isEven = index % 2 === 0;
  const animatedStyle = {
    transform: [
      {
        rotate: animatedValue.interpolate({
          inputRange: [0, screenHeight],
          outputRange: [isEven ? '0deg' : '360deg', isEven ? '360deg' : '0deg'],
        }),
      },
    ],
  };
  return (
    <Card elevation={8} aspectRatio={2} style={styles.cardStyle}>
      <Animated.Image
        source={images.star}
        style={[styles.image, animatedStyle]}
      />
      <Button onPress={onBtnPress} title={btnText} />
    </Card>
  );
};

export default function ScreenA(props) {
  const {openModal} = props;
  const animatedValue = useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      extraData={animatedValue}
      contentContainerStyle={styles.container}
      data={mockListData}
      keyExtractor={(item) => objectGet(item, 'id')}
      renderItem={({item, index}) => (
        <ListItem
          {...item}
          index={index}
          openModal={openModal}
          animatedValue={animatedValue}
        />
      )}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: animatedValue}}}],
        {useNativeDriver: true},
      )}
    />
  );
}
