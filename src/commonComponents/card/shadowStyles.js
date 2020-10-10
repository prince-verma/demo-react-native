import {StyleSheet} from 'react-native';

const radius = [
  '1',
  '2',
  '4',
  '5',
  '8',
  '10',
  '10',
  '10',
  '12',
  '14',
  '15',
  '17',
  '19',
  '21',
  '22',
  '24',
  '26',
  '28',
  '29',
  '31',
  '33',
  '35',
  '36',
  '38',
];

/**
 * function to get shadow opacity and radius
 * @param {number} i
 * @param {number} a
 * @param {number} b
 * @param {number} a2
 * @param {number} b2
 * @returns {number}
 */
const interpolate = (i, a, b, a2, b2) => (i - a) * ((b2 - a2) / (b - a)) + a2;

/**
 * function to get shadow styles.
 * @param {number} depth
 * @returns {Object}
 */
export default (depth) => {
  const nextDepth = depth + 1 >= radius.length ? radius.length - 1 : depth;

  return StyleSheet.create({
    shadow: {
      borderColor: '#E0E0E0',
      borderWidth: 1,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: nextDepth === 1 ? 1 : nextDepth / 2,
      },
      backgroundColor: '#FFF',
      shadowOpacity: nextDepth && interpolate(nextDepth, 1, 24, 0.2, 0.6),
      shadowRadius: nextDepth && interpolate(radius[depth], 1, 38, 1, 16),
      elevation: nextDepth && nextDepth + 1,
    },
  });
};
