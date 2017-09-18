// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
const queue = require('./queue-helper.js');

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
    const current = (node) => {
      if (node.value < value) {
        if (node.right !== null) return current(node.right);
        node.right = newNode;
      } else if (node.value > value) {
        if (node.left !== null) return current(node.left); 
        node.left = newNode;
      }
    };
    current(this);
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    const current = (node) => {
      if (node.value === target) return true;
      if (node.value < target) {
        if (node.right !== null) return current(node.right);
        return false;
      } 
      if (node.value > target) {
        if (node.left !== null) return current(node.left); 
        return false;
      }
    };
    return current(this);
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    const search = (node) => {
      cb(node.value);
      if (node.left !== null) search(node.left);
      if (node.right !== null) search(node.right);
    };
    search(this);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    queue.enqueue(this);
    while (!queue.isEmpty()) {
      const current = queue.dequeue();
      cb(current.value);
      if (current.left !== null) queue.enqueue(current.left);
      if (current.right !== null) queue.enqueue(current.right);
    }
  }
}

module.exports = BinarySearchTree;
