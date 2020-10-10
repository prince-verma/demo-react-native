import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import shadowStyles from './shadowStyles';

import {isFunction} from '../../utilities/validations';

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
  },
});

/**
 * card component
 * @param {Object} props
 * @returns {JSX}
 */
const Card = (props) => {
  const {
    children,
    elevation,
    borderRadius,
    aspectRatio,
    style,
    onPress,
  } = props;
  const sizeStyle = {
    borderRadius,
    aspectRatio,
    alignSelf: 'auto',
  };
  const showdowStyles = shadowStyles(elevation);
  const Container = isFunction(onPress) ? TouchableOpacity : View;

  return (
    <>
      <Container
        activeOpacity={0.6}
        onPress={onPress}
        style={[styles.card, showdowStyles.shadow, sizeStyle, style]}>
        {children}
      </Container>
      <View style={{paddingTop: elevation + 1}} />
    </>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  elevation: PropTypes.number,
  aspectRatio: PropTypes.number,
  borderRadius: PropTypes.number,
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Card.defaultProps = {
  elevation: 8,
  borderRadius: 4,
  aspectRatio: undefined,
};

export default memo(Card);
