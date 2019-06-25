// Use this class to create binary trees.
class Node {
	constructor(value, left = null, right = null) {
		this.value = value
		this.left = left
		this.right = right
	}

	toString() {
		return this.value
	}

	static toTree(arr) {
		// check if there's a subtree
		if (!arr) return null;
		// check if leaf
		if (typeof arr == "number") return arr;
		// or return a subtree
		return new Node(arr[0], Node.toTree(arr[1]), Node.toTree(arr[2]));
	}
}

module.exports = Node;