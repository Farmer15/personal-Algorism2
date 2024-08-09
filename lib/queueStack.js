/**
 * Implement a queue using two stacks.
 */

/**
 * Stack Class (You can use array in your logic)
 */
export const Stack = function () {
  const stackStorage = [];
  // add an item to the top of the stack
  this.push = function (value) {
    stackStorage[stackStorage.length] = value;
  };

  // remove an item from the top of the stack
  this.pop = function () {
    const temp = stackStorage[stackStorage.length - 1];
    stackStorage.length--;

    return temp;
  };

  // return the number of items in the stack
  this.size = function () {
    return stackStorage.length;
  };
};

/**
 * Queue Class
 */
export const Queue = function () {
  // Use two `stack` instances to implement your `queue` Class
  const inbox = new Stack();
  const outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function (value) {
    inbox.push(value);
  };

  // called to remove an item from the `queue`
  this.dequeue = function () {

    for (let i = inbox.size(); i > 0; i--) {
      outbox.push(inbox.pop());
    }

    const temp = outbox.pop();

    for (let i = outbox.size(); i > 0; i--) {
      inbox.push(outbox.pop());
    }

    return temp;
  };

  // return the number of items in the queue
  this.size = function () {
    return inbox.size();
  };
};
