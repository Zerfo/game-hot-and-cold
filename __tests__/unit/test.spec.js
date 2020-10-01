function sum(a, b) {
  return a + b;
}

it('test sum function', function t() {
  expect(sum(1, 2)).toBe(3);
});
