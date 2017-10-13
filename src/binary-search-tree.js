const Queue = require('./queue-helper');
// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  insert(value) {
    let current = this;
    let inserted = false;
    while (!(inserted)) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = new BinarySearchTree(value);
          inserted = true;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = new BinarySearchTree(value);
          inserted = true;
        }
        current = current.right;
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    const recursiveTest = (n) => {
      if (n === null) return false;
      if (n.value === target) return true;
      if (n.value < target) return recursiveTest(n.right);
      if (n.value > target) return recursiveTest(n.left);
    };
    return recursiveTest(this);
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb);
    if (this.right !== null) this.right.depthFirstForEach(cb);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const queue = new Queue();
    queue.enqueue(this);
    while (!(queue.isEmpty())) {
      const testItem = queue.dequeue();
      cb(testItem.value);
      if (testItem.left !== null) queue.enqueue(testItem.left);
      if (testItem.right !== null) queue.enqueue(testItem.right);
    }
  }
}

module.exports = BinarySearchTree;
