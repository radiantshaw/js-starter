const { fizzbuzz } = require('./fizzbuzz');
 
test("returns the integer", ()  => {
  expect(fizzbuzz(1)).toBe("1");
  expect(fizzbuzz(2)).toBe("1 2");
});
