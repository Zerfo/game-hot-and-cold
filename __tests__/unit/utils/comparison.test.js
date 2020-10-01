import comparison from '../../../src/utils/comparison';

const NUMBER = [4, 3, 2];

describe('', () => {
  it('', () => {
    const rezult = comparison(4, NUMBER, 0);
    expect(rezult).toBe('hot');
  })
  it('', () => {
    const rezult = comparison(4, NUMBER, 1);
    expect(rezult).toBe('warmly');
  })
  it('', () => {
    const rezult = comparison(4, NUMBER, 2);
    expect(rezult).toBe('warmly');
  })
});

describe('', () => {
  it('', () => {
    const rezult = comparison(3, NUMBER, 0);
    expect(rezult).toBe('warmly');
  })
  it('', () => {
    const rezult = comparison(3, NUMBER, 1);
    expect(rezult).toBe('hot');
  })
  it('', () => {
    const rezult = comparison(3, NUMBER, 2);
    expect(rezult).toBe('warmly');
  })
});

describe('', () => {
  it('', () => {
    const rezult = comparison(2, NUMBER, 0);
    expect(rezult).toBe('warmly');
  })
  it('', () => {
    const rezult = comparison(2, NUMBER, 1);
    expect(rezult).toBe('warmly');
  })
  it('', () => {
    const rezult = comparison(2, NUMBER, 2);
    expect(rezult).toBe('hot');
  })
});

it('', () => {
  const rezult = comparison(5, NUMBER, 0);
  expect(rezult).toBe('cold');
})