function fizzbuzz(n) {
  let result = "";

  for(let i = 1; i <= n; i++) {
    result += i;

    if (i < n) {
      result += " ";
    }
  }

  return result;
}
  
module.exports = { fizzbuzz };
