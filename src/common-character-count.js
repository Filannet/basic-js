const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  const letterFrequency = {};

  for (const letter of str1) {
    letterFrequency[letter] = (letterFrequency[letter] || 0) + 1;
  }

  let count = 0;

  for (const letter of str2) {
    if (letterFrequency[letter] > 0) {
      count++;
      letterFrequency[letter]--;
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
