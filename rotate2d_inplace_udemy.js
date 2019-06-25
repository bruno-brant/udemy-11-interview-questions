const _ = require('lodash');
const assert = require('assert');
const matrix_to_string = require('./matrix_to_string');

// Implement your function below.
// n = // rows = // columns in the given 2d array
function rotate(arr, n) {
	for (let i = 0; i < Math.floor(n / 2); i++) {
		for (let j = 0; j < Math.ceil(n / 2); j++) {
			let c1 = [i, j];
			let c2 = rotatePair(c1, n);
			let c3 = rotatePair(c2, n);
			let c4 = rotatePair(c3, n);

			swap(arr, c1, c2, c3, c4);
		}
	}


	console.log(matrix_to_string(arr));

	// NOTE: To solve it in place, write this function so that you
	// won't have to create rotated.
	return arr
}

function rotatePair([i, j], n) {
	return [j, n - 1 - i];
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