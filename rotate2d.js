const _ = require('lodash');
const assert = require('assert');
const matrix_to_string = require('./matrix_to_string');

// Implement your function below.
// n = // rows = // columns in the given 2d array
function rotate(given_array, n) {
	let rotated = _.cloneDeep(given_array)

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			rotated[j][n - i - 1] = given_array[i][j]
		}
	}
	
	console.log(matrix_to_string(rotated));

	// NOTE: To solve it in place, write this function so that you
	// won't have to create rotated.
	return rotated
}

// NOTE: The following input values will be used for testing your solution.
const a1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]

assert(_.isEqual(
	rotate(a1, 3),
	[
		[7, 4, 1],
		[8, 5, 2],
		[9, 6, 3]
	]
));

const a2 = [
	[01, 02, 03, 04],
	[05, 06, 07, 08],
	[09, 10, 11, 12],
	[13, 14, 15, 16]
]

assert(_.isEqual(
	rotate(a2, 4),
	[
		[13, 09, 05, 01],
		[14, 10, 06, 02],
		[15, 11, 07, 03],
		[16, 12, 08, 04]
	]
));

console.log('success')