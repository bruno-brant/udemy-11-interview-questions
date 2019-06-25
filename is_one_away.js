const assert = require("assert");

Object.defineProperty(Object.prototype, 'shouldreturn', {
	get: function () {
		return function (expected) {
			if (this.valueOf() !== expected) {
				console.error(`Expected '${expected}'\n Actual '${this.valueOf()}'`);
				process.exit(1);
			}
		};
	}
});

// Implement your function below.
/**
 * 
 * @param {string} str1 
 * @param {string} str2 
 * @returns {object} 
 */
function is_one_away(str1, str2) {
	let i1 = 0, i2 = 0, diffs = 0;

	while (i1 < str1.length && i2 < str2.length) {
		if (str1[i1] == str2[i2]) {
			i1++;
			i2++;
			continue;
		}

		diffs++;
		if (diffs > 1) return false;

		if (str1[i1] == str2[i2 + 1]) i2++;
		else if (str1[i1 + 1] == str2[i2]) i1++;
		else { i1++; i2++; }
	}

	return Math.abs((str1.length - i1) - (str2.length - i2)) +  diffs <= 1;
}


// /**
//  * 
//  */
// function distanceBetween(str1, str2) {

// 	let i1 = 0, i2 = 0, diffs = 0;

// 	while (i1 < str1.length && i2 < str2.length) {
// 		if (str1[i1] == str2[i2]) {
// 			i1++;
// 			i2++;
// 			continue;
// 		}

// 		diffs++;

// 		if (str1[i1] == str2[i2 + 1]) i2++;
// 		if (str1[i1 + 1] == str2[i2]) i1++;

// 	}

// 	return diffs;
// }

// assert(distanceBetween("b", "b") == 0);

//NOTE: The following input values will be used for testing your solution.
assert(is_one_away("abcde", "abcd") == true);
assert(is_one_away("abde", "abcde") == true);
assert(is_one_away("a", "a") == true);
assert(is_one_away("", "a") == true);
assert(is_one_away("", "") == true);
assert(is_one_away("abcdef", "abqdef") == true);
assert(is_one_away("abcdef", "abccef") == true);
assert(is_one_away("abcdef", "abcde") == true);
assert(is_one_away("aaa", "abc") == false);
assert(is_one_away("abcde", "abc") == false);
assert(is_one_away("abc", "abcde") == false);
assert(is_one_away("abc", "bcc") == false);
assert(is_one_away("abcdef", "abxcdefx") == false);

console.log("success");