const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let sum = 0;
  const excludeColumns = new Set();

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (!excludeColumns.has(i)) {
        if (matrix[j][i] === 0) {
          excludeColumns.add(i);
        } else {
          sum += matrix[j][i];
        }
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
