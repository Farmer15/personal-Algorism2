/**
 * Write a function that reverses the order of a singly-linked list in place.
 *
 * So a list like this:
 *   A -> B -> C -> null
 * Should be transformed into a list like this:
 *   C -> B -> A -> null
 *
 * Example:
 *
 * var root = Node('A');
 * var nodeB = root.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * // The list looks like this: A -> B -> C -> null
 *
 * var newRoot = reverseLinkedList(root);
 * // The list now looks like this: C -> B -> A -> null
 * newRoot.value // => 'C'
 * newRoot.next  // => nodeB
 * root.next     // => null (the old root is now the terminal node)
 *
 * (You can assume that the list ends without a cycle.)
 */

export const Node = function (value) {
  return { value: value, next: null };
};

const linkedList = function (head) {
  this.head = head;
  this.tail = null;
}

export const reverseLinkedList = function (node) {
  if (!node) {
    throw Error();
  }

  let currentNode = node;
  let cachedValue = [];
  let resultNode = new Node;
  let result= resultNode;

  while (currentNode) {
    cachedValue[cachedValue.length] = currentNode.value;
    currentNode = currentNode.next;
  }

  let cachedIndex = cachedValue.length - 1;

  while (cachedIndex >= 0) {
    const newNode = new Node(cachedValue[cachedIndex]);
    resultNode.next = newNode;
    resultNode = resultNode.next;
    cachedIndex--;
  }

  return result.next;
};
