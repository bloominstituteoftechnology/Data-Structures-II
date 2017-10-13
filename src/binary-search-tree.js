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
    const newTree = new BinarySearchTree(value);
    if (this.value > value && this.left !== null) {
      this.left.insert(value);
    } else if (this.value <= value && this.right !== null) {
      this.right.insert(value);
    } else if (this.value > value && this.left === null) {
      this.left = newTree;
    } else if (this.value <= value && this.right === null) {
      this.right = newTree;
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.value === target) return true;
    if (this.left !== null && this.left.contains(target)) return true;
    if (this.right !== null && this.right.contains(target)) return true;
    return false;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstForEach(cb);
    }
    if (this.right !== null) {
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
    return this;
  }
}

module.exports = BinarySearchTree;
