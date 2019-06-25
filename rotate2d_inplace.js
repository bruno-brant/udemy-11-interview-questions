const _ = require('lodash');
const assert = require('assert');
const matrix_to_string = require('./matrix_to_string');

// Implement your function below.
// n = // rows = // columns in the given 2d array
function rotate(arr, n) {
	let min_i = 0, min_j = 0, max_i = n - 1, max_j = n - 1;

	while (min_i < max_i && min_j < max_j) {
		//for (let min_i = 0, max_i = n - 1; min_i < max_i; min_i++ , max_i--) {
		//for (let min_j = 0, max_j = n - 1; min_j < max_j; min_j++ , max_j--) {

		for (let k = min_i; k < max_i; k++) {
			swap(arr, [min_i, min_j + k], [min_i + k, max_j], [max_i, max_j - k], [max_i - k, min_j]);
		}

		min_i++; min_j++;
		max_i--; max_j--;
	}

	console.log(matrix_to_string(arr));

	// NOTE: To solve it in place, write this function so that you
	// won't have to create rotated.
	return arr
}

function swap(arr, c1, c2, c3, c4) {
	/** Gets the value of the array on the given position */
	const v = (cx) => {
		const i = cx[0];
		const j = cx[1];
		return arr[i][j];
	};
	/** Assigns the value from cb to ca */
	const a = (ca, cb) => arr[ca[0]][ca[1]] = typeof (cb) == 'number' ? cb : v(cb);

	let c1_old = v(c1);

	a(c1, c4);
	a(c4, c3);
	a(c3, c2);
	a(c2, c1_old);
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