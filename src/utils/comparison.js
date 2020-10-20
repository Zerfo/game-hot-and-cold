/**
 *
 * @param {number} value
 * @param {number} position
 * @param {array} number
 */
export default function comparison(value, number, position) {
  if (value === number[position]) {
    return 'hot';
  }
  if (number.some((el) => el === value)) {
    return 'warmly';
  }
  return 'cold';
}
