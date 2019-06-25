
function toTree(arr) {
	// check if there's a subtree
	if (!arr) return null;
	// check if leaf
	if (typeof arr == "number") return arr;
	// or return a subtree
	return new Node(arr[0], toTree(arr[1]), toTree(arr[2]));
}

let head1 = toTree([0, [1, [3, 4]], [2, [5, 6]]])

function printTree(tree) {

}