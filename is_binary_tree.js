// udemy - binary trees
const assert = require('assert')
const Node = require('./tree');

// Implement your function below.
function is_bst(node, lower_lim = null, upper_lim = null) {
	if (lower_lim && node.value <= lower_lim) return false;
	if (upper_lim && node.value >= upper_lim) return false;

	if (node.left) {
		if (!is_bst(node.left, lower_lim, node.value)) return false;
	}

	if (node.right) {
		if (!is_bst(node.right, node.value, upper_lim)) return false;
	}

	return true;
}

// NOTE{ The following values will be used for testing your solution.

// The mapping we're going to use for constructing a tree.
// {0{ [1, 2]} means that 0's left child is 1, and its right
// child is 2.
let head1 = Node.toTree([0, [1, [3], [4]], [2, [5], [6]]])
// This tree is{
//  head1 = 0
//        /   \
//       1     2
//      /\    / \
//     3  4  5   6
let head2 = Node.toTree([3, [1, [0], [2]], [4, [5], [6]]])
// This tree is{
//  head2 = 3
//        /   \
//       1     4
//      /\    / \
//     0  2  5   6
let head3 = Node.toTree([3, [1, [0], [2]], [5, [4], [6]]]);
// This tree is{
//  head3 = 3
//        /   \
//       1     5
//      /\    / \
//     0  2  4   6
let head4 = Node.toTree([3, [1, [0], [4]], [5]])
// This tree is{
//  head4 = 3
//        /   \
//       1     5
//      /\
//     0  4

assert(is_bst(head1) == false)
assert(is_bst(head2) == false)
assert(is_bst(head3) == true)
assert(is_bst(head4) == false)

console.log('success');
