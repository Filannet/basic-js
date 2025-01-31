const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  const resultMatrix = new Array(rows).fill(0).map(() => new Array(columns).fill(0));

  function hasMine(row, col) {
    return matrix[row] && matrix[row][col];
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          if ((i !== row || j !== col) && hasMine(i, j)) {
            resultMatrix[row][col]++;
          }
        }
      }
    }
  }

  return resultMatrix;
}

module.exports = {
  minesweeper
};
