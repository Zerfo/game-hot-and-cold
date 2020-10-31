import comparison from '../../../src/utils/comparison';
import { NUMBER } from '../../constants';

describe('checking value values ​​for number "432"', () => {
  describe('', () => {
    it('', () => {
      const rezult = comparison(4, NUMBER, 0);
      expect(rezult).toBe('hot');
    });
    it('', () => {
      const rezult = comparison(4, NUMBER, 1);
      expect(rezult).toBe('warmly');
    });
    it('', () => {
      const rezult = comparison(4, NUMBER, 2);
      expect(rezult).toBe('warmly');
    });
  });

  describe('', () => {
    it('', () => {
      const rezult = comparison(3, NUMBER, 0);
      expect(rezult).toBe('warmly');
    });
    it('', () => {
      const rezult = comparison(3, NUMBER, 1);
      expect(rezult).toBe('hot');
    });
    it('', () => {
      const rezult = comparison(3, NUMBER, 2);
      expect(rezult).toBe('warmly');
    });
  });

  describe('', () => {
    it('', () => {
      const rezult = comparison(2, NUMBER, 0);
      expect(rezult).toBe('warmly');
    });
    it('', () => {
      const rezult = comparison(2, NUMBER, 1);
      expect(rezult).toBe('warmly');
    });
    it('', () => {
      const rezult = comparison(2, NUMBER, 2);
      expect(rezult).toBe('hot');
    });
  });

  it('checking the output of the "cold" value', () => {
    const rezult = comparison(5, NUMBER, 0);
    expect(rezult).toBe('cold');
  });
});
