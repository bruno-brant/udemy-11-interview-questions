console.log('start');

function * intersect(a, b) {
	//let r = [];
	for (let i = 0, j = 0; i < a.length && j < b.length;) {
		if (a[i] === b[j]) {
			//r.push(a[i]);]
			yield a[i];
			i++;
			j++;
		} else if (a[i] < b[j]) {
			i++;
		} else if (a[i] > b[j]) {
			j++;
		}
	}

	//return r;
}

let A = [1, 3, 4, 6, 7, 9];
let B = [1, 2, 4, 5, 9, 10];


console.log(intersect(A, B));
