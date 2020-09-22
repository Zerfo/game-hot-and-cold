export default function comparison(value, number, position) {
  if(value === number[position]) { return 'hot'; }
  else if(number.some(el => el === value)) { return 'warmly'; }
  else { return 'cold'}
}