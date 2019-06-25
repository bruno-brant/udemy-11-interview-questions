// minesweeper coding exercise for Udemy
const _ = require('lodash');
const assert = require('assert');

// Implement your function below.
function mine_sweeper(bombs, num_rows, num_cols) {
	const field = initMatrix(num_rows, num_cols, 0);

	for (let [row, column] of bombs) field[row][column] = -1;

	for (let [row, column] of bombs) {

		// increase the value of each neighbor of the bomb, unless it is a bomb
		for (let i = Math.max(0, row - 1); i <= Math.min(num_rows - 1, row + 1); i++) {
			for (let j = Math.max(0, column - 1); j <= Math.min(num_cols - 1, column + 1); j++) {
				if (field[i][j] == -1) continue;
				field[i][j]++;

			}
		}
	}

	console.log(to_string(field));

	return field;

	// for (let i = 0; i < num_rows; i++) {
	// 	for (let j = 0; j < num_cols; j++) {
	// 		if (field[i][j] == -1) continue; // skip bombs

	// 	}
	// }

}

function initMatrix(rows, columns, initialValue) {
	let m = [];
	for (let i = 0; i < rows; i++) {
		m[i] = []
		for (let j = 0; j < columns; j++) {
			m[i][j] = initialValue;
		}
	}

	return m;
}


// NOTE: Feel free to use the following function for testing.
// It converts a 2-dimensional array (a list of lists) into
// an easy-to-read string format.
function to_string(given_array) {
	let list_rows = []
	for (let row of given_array) {
		list_rows.push(row.join(', '))
	}
	return '[' + list_rows.join(',\n ') + ']'
}

// NOTE: The following input values will be used for testing your solution.
assert(_.isEqual(
	mine_sweeper([[0, 2], [2, 0]], 3, 3),
	[[0, 1, -1],
	[1, 2, 1],
	[-1, 1, 0]]
));

assert(_.isEqual(
	mine_sweeper([[0, 0], [0, 1], [1, 2]], 3, 4),
	[[-1, -1, 2, 1],
	[2, 3, -1, 1],
	[0, 1, 1, 1]]
));

assert(_.isEqual(
	mine_sweeper([[1, 1], [1, 2], [2, 2], [4, 3]], 5, 5),
	[[1, 2, 2, 1, 0],
	[1, -1, -1, 2, 0],
	[1, 3, -1, 2, 0],
	[0, 1, 2, 2, 1],
	[0, 0, 1, -1, 1]]
));

console.log('success');

// console.log([
// 	_.isEqual([], []),
// 	_.isEqual([1], [1]),
// 	_.isEqual([1, 2], [1]),
// 	_.isEqual([1, 2], [1, 3]),
// 	_.isEqual([1, [2]], [1, [2]])
// ]);