// NOTE: Feel free to use the following function for testing.
// It converts a 2-dimensional array (a list of lists) into
// an easy-to-read string format.
function matrix_to_string(given_array) {
	let list_rows = []
	for (let row of given_array) {
		list_rows.push(row.join(', '))
	}
	return '[' + list_rows.join(',\n ') + ']'
}

module.exports = matrix_to_string;