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
    const node = new BinarySearchTree(value);
    if (node.value < this.value) {
      if (!this.left) {
        this.left = node;
      } else {
        this.left.insert(node.value);
      }
    } else if (node.value >= this.value) {
      if (!this.right) {
        this.right = node;
      } else {
        this.right.insert(node.value);
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (target === this.value) return true;
    if (target < this.value) {
      if (!this.left) return false;
      return this.left.contains(target);
    } 
    if (!this.right) return false;
    return this.right.contains(target);
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    const search = (arg) => {
      cb(arg.value);
      if (!arg.left && !arg.right) return;
      if (arg.left) search(arg.left);
      if (arg.right) search(arg.right);
    };
    search(this);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  /* eslint-disable global-require */
  breadthFirstForEach(cb) {  
    if (!this.value) return null;
    const storage = [];
    const result = new Queue();
    storage.push(this);
    while (storage.length > 0) {
      const node = storage.shift();
      result.enqueue(cb(node.value));
      if (node.left) storage.push(node.left);
      if (node.right) storage.push(node.right);
    }
  }
}
module.exports = BinarySearchTree;
