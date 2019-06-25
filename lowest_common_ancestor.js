// udemy - lowest common ancestor 

const Node = require('./tree');
const assert = require('assert');

// Implement your function below.
function lca(root, j, k) {
	if (root == null) return null;

	const items = new Set([j, k]);

	let found = lca_find(root, items, 0);

	if (items.size == 0) return found;

	return null;
}

/**
 * 
 * @param {Node} tree 
 * @param {Set} items 
 */
function lca_find(tree, items, level) {
	if (tree == null) return null;

	let left = lca_find(tree.left, items, level + 1);
	let right = lca_find(tree.right, items, level + 1);

	if (items.has(tree.value)) {
		items.delete(tree.value)
		return tree.value
	}

	if (left != null && right != null) {
		return tree.value
	}

	if (left != null) return left

	if (right != null) return right

	return null
}

mapping1 = [0, [1, [3], [4]], [2, [5], [6]]]
head1 = Node.toTree(mapping1, 0)
// This tree is:
// head1 = 0
//        / \
//       1   2
//      /\   /\
//     3  4 5  6


mapping2 = [5, [1, [3, [6], [7]], [8]], [4, [9], [2]]]
head2 = Node.toTree(mapping2, 5)
// This tree is:
//  head2 = 5
//        /   \
//       1     4
//      / \   / \
//     3   8 9   2
//    / \
//   6   7

assert(lca(head1, 1, 5) == 0)
assert(lca(head1, 3, 1) == 1)
assert(lca(head1, 1, 4) == 1)
assert(lca(head1, 0, 5) == 0)
assert(lca(head2, 4, 7) == 5)
assert(lca(head2, 3, 3) == 3)
assert(lca(head2, 8, 7) == 1)
assert(lca(head2, 3, 0) == null)

console.log('success');
