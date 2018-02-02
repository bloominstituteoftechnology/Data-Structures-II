// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable */
const Queue = require('./queue-helper');

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
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (target === null) return;
    if (target === this.value) return true; // base case
    if (target < this.value) {
      if (!this.left) return false;
      return this.left.contains(target);
    } else if (target > this.value) {
      if (this.right === null) return false;
      return this.right.contains(target);
    }
    return false;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    if (this.value !== null) cb(this.value);

    if (this.left) this.left.depthFirstForEach(cb);
    if (this.right) this.right.depthFirstForEach(cb);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    let queue = new Queue();
    queue.enqueue(this);
    while (!queue.isEmpty()) {
      const nodeDeq = queue.dequeue();
      if (nodeDeq.left) {
        queue.enqueue(nodeDeq.left);
      }
      if (nodeDeq.right) {
        queue.enqueue(nodeDeq.right);
      }
      cb(nodeDeq.value);
    }
  }

}
module.exports = BinarySearchTree;
