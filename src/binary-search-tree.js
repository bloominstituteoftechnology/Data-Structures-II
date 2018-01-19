// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
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
    const node = new BinarySearchTree(value);
    if (value > this.value) {
      if (!this.right) {
        this.right = node;
      } else {
        this.right.insert(value);
      }
    } else {
      if (!this.left) {
        this.left = node;
      } else {
        this.left.insert(value);
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    let containsValue = false;
    if (this.value === target) return containsValue = true;
    if (this.left) {
      if (this.left.contains(target)) return containsValue = true;
    }
    if (this.right) {
      if (this.right.contains(target)) return containsValue = true;
    }
    return containsValue;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb);
    }
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const q = new Queue();
    q.enqueue(this);
    while (!q.isEmpty()) {
      const node = q.dequeue();
      if (node.left) {
        q.enqueue(node.left);
      }
      if (node.right) {
        q.enqueue(node.right);
      }
      cb(node.value);
    }
  }
}

module.exports = BinarySearchTree;
