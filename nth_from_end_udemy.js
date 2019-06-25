// Udemy - linked lists - get the nth element counting from the end on a linked list
const range = require('lodash').range
const assert = require('assert')

class Node {
	constructor(value, next) {
		if (value == null) throw new TypeError("value must be informed")
		this.value = value
		this.next = next
	}
}


// Implement your function below.
/**
 * 
 * @param {Node} head  
 * @param {number} n 
 */
function nth_from_last(head, n) {
	let ptr1 = head;
	for (let i = 0; i < n; i++) {
		if (ptr1 == null) return null;
		ptr1 = ptr1.next;
	}

	let ptr2 = head;

	while (ptr1 != null) {
		ptr1 = ptr1.next;
		ptr2 = ptr2.next;
	}

	return ptr2.value;
}

/**
 * Count how many items are in the linked list.
 * @param {Node} head The head of the linked list.
 * @returns {number} The number of items in the linked list.
 */
function count(head) {
	if (head == null) return 0; // empty list
	return count(head.next) + 1;
}

assert(count(null) == 0);
assert(count({}) == 1);
assert(count({ next: {} }) == 2);
assert(count({ next: { next: {} } }) == 3);


// NOTE: Feel free to use the following function for testing.
// It converts the given linked list into an easy-to-read string format.
// Example: 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> (None)
function linked_list_to_string(head) {
	let current = head
	let str_list = []

	while (current) {
		str_list.push(current.value)
		current = current.next
	}

	str_list.push('(None)')
	return str_list.join(' -> ')
}

assert(nth_from_last(null, 1) == null)

// NOTE: The following input values will be used for testing your solution.
let current = new Node(1)
for (i of [2, 3, 4, 5, 6, 7]) {
	current = new Node(i, current)
}
let head = current
console.log(linked_list_to_string(head))
// head = 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> (None)

assert(nth_from_last(head, 1) == 1)
assert(nth_from_last(head, 5) == 5)

let current2 = new Node(4)
for (i of [3, 2, 1]) {
	current2 = new Node(i, current2)
}
let head2 = current2
// head2 = 1 -> 2 -> 3 -> 4 -> (None)
console.log(linked_list_to_string(head2))

assert(nth_from_last(head2, 2) == 3)
assert(nth_from_last(head2, 4) == 1)
assert(nth_from_last(head2, 5) == null)

console.log('success')
