Object.defineProperty(Object.prototype, 'shouldreturn', {
	get: () => function (expected) {
		if (this.valueOf() !== expected) {
			console.error(`Expected '${expected}'\n Actual '${this.valueOf()}'`);
			process.exit(1);
		}
	}
});

function len(x) { return x.length; }

// Iterates on a array circurlary
function* circularIteration(array, start) {
	for (let i = 0; i < array.length; i++) {
		yield array[(start + i) % array.length];
	}
}

function isSame(arr1, arr1Start, arr2, arr2Start) {
	let arr1Iterator = circularIteration(arr1, arr1Start);
	let arr2Iterator = circularIteration(arr2, arr2Start);

	while (true) {
		let arr1Current = arr1Iterator.next();
		let arr2Current = arr2Iterator.next();
		if (arr1Current.done == arr2Current.done && arr1Current.done == true) return true;
		if (arr1Current.done == true || arr2Current.done == true) return false;
		if (arr1Current.value != arr2Current.value) return false;
	}
}

// Implement your function below.
function is_rotation(list1, list2) {
	for (let i = 0; i < list2.length; i++) {
		if (list1[0] == list2[i]) {
			if (isSame(list1, 0, list2, i)) return true;
		}
	}

	return false;
}

const True = true;
const False = false;
// NOTE: The following input values will be used for testing your solution.
let list1 = [1, 2, 3, 4, 5, 6, 7]
let list2a = [4, 5, 6, 7, 8, 1, 2, 3]
// @ts-ignore
is_rotation(list1, list2a).shouldreturn(false);
let list2b = [4, 5, 6, 7, 1, 2, 3]
// @ts-ignore
is_rotation(list1, list2b).shouldreturn(True)
let list2c = [4, 5, 6, 9, 1, 2, 3]
// @ts-ignore
is_rotation(list1, list2c).shouldreturn(False);
let list2d = [4, 6, 5, 7, 1, 2, 3]
// @ts-ignore
is_rotation(list1, list2d).shouldreturn(False);
let list2e = [4, 5, 6, 7, 0, 2, 3]
// @ts-ignore
is_rotation(list1, list2e).shouldreturn(False);
let list2f = [1, 2, 3, 4, 5, 6, 7]
// @ts-ignore
is_rotation(list1, list2f).shouldreturn(True);
let list2g = [7, 1, 2, 3, 4, 5, 6]
// @ts-ignore
is_rotation(list1, list2g).shouldreturn(True);

console.log("Success.");
