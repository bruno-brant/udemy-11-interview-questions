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
 * @param {string} given_string
 * @returns {string|null}
 */
function non_repeating(given_string) {
    let tracking = {};
    let nr = null;

    for (const c of given_string) {
        if (tracking[c] == null) {
            tracking[c] = 1;
            if (nr == null) nr = c;
        }
        else tracking[c]++;
    }

    if (tracking[nr] == 1) return nr;

    for (const letter in tracking) {
        if (tracking[letter] == 1) {
            return letter;
        }
    }

    return null;
}

// NOTE: The following input values will be used for testing your solution.
assert(non_repeating("abcab") == 'c');
assert(non_repeating("babab") == null)
assert(non_repeating("bbbcaa") == 'c')
assert(non_repeating("azbbdbcaa") == 'z')

console.log('success');
