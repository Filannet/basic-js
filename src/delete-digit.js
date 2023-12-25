const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numToStr = String(n);
  let maxNumber = 0;

  for (let i = 0; i < numToStr.length; i++) {
    const newNumToStr = numToStr.slice(0, i) + numToStr.slice(i + 1);
    const newNumber = parseInt(newNumToStr, 10);
    maxNumber = Math.max(maxNumber, newNumber);
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
