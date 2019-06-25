const assert = require('assert');
const _ = require('lodash');
const matrix_to_string = require('./matrix_to_string');

// Implement your function below.
function click(field, num_rows, num_cols, given_i, given_j) {
	if (field[given_i][given_j] != 0) return field;

	mark(field, num_rows, num_cols, given_i, given_j);

	console.log(matrix_to_string(field));

	return field;
}

function mark(field, num_rows, num_cols, given_i, given_j) {
	field[given_i][given_j] = -2;
	for (const [i, j] of neighbors(num_rows, num_cols, given_i, given_j)) {
		if (field[i][j] == 0) mark(field, num_rows, num_cols, i, j);
	}
}

/**
 * Gets the indices of the neighbor cells of a cell.
 * @param {number} num_rows Number of rows in the matrix.
 * @param {number} num_cols Number of cols in the matrix.
 * @param {number} row The row index for the cell for which we will find neighbors.
 * @param {number} column The column index the cell for which we will find neighbors.
 * @returns {number[]} Indexes for every neighbor of the informed cell.
 */
function* neighbors(num_rows, num_cols, row, column) {
	for (let i = Math.max(0, row - 1); i <= Math.min(num_rows - 1, row + 1); i++) {
		for (let j = Math.max(0, column - 1); j <= Math.min(num_cols - 1, column + 1); j++) {
			if (i == row && j == column) continue; // skip the current cell
			yield [i, j];
		}
	}
}

// NOTE: The following input values will be used for testing your solution.
let field1 = [
	[+0, +0, +0, +0, +0],
	[+0, +1, +1, +1, +0],
	[+0, +1, -1, +1, +0]
];

assert(_.isEqual(
	click(field1, 3, 5, 2, 2),
	[
		[+0, +0, +0, +0, +0],
		[+0, +1, +1, +1, +0],
		[+0, +1, -1, +1, +0]
	]
));

assert(_.isEqual(
	click(field1, 3, 5, 1, 4),
	[
		[-2, -2, -2, -2, -2],
		[-2, +1, +1, +1, -2],
		[-2, +1, -1, +1, -2]
	]
));

const field2 = [
	[-1, +1, +0, +0],
	[+1, +1, +0, +0],
	[+0, +0, +1, +1],
	[+0, +0, +1, -1]
];

assert(_.isEqual(
	click(field2, 4, 4, +0, 1),
	[
		[-1, +1, +0, +0],
		[+1, +1, +0, +0],
		[+0, +0, +1, +1],
		[+0, +0, +1, -1]
	]
));

assert(_.isEqual(
	click(field2, 4, 4, +1, 3),
	[
		[-1, +1, -2, -2],
		[+1, +1, -2, -2],
		[-2, -2, +1, +1],
		[-2, -2, +1, -1]
	]
));

console.log('success');
