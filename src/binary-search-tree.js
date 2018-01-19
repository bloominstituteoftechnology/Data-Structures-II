// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */

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
    if (value === null) return;
    if (this.value === null) {
      this.value = value;
      return;
    }
    if (value <= this.value) {
      if (this.left === null) {
        const child = new BinarySearchTree(value);
        this.left = child;
        return;
      }
      return this.left.insert(value);
    }
    if (value > this.value) {
      if (this.right === null) {
        const child = new BinarySearchTree(value);
        this.right = child;
        return;
      }
      return this.right.insert(value);
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    const found = true;
    if (target === null) return;
    if (this.value === null) return !found;
    if (this.value === target) return found;
    if (target <= this.value) {
      if (this.left !== null) return this.left.contains(target);
      return !found;
    }
    if (target > this.value) {
      if (this.right !== null) return this.right.contains(target);
      return !found;
    }
    return !found;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    if (this.value === null) return;
    this.value = cb(this.value);
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
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      if (node.left) {
        queue.enqueue(node.left);
      }
      if (node.right) {
        queue.enqueue(node.right);
      }
      cb(node.value);
    }
  }
}

module.exports = BinarySearchTree;
