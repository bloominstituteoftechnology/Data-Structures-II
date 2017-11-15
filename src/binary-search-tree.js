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
    const insertedNode = new BinarySearchTree(value);
    let currentLocation = this;
    while (currentLocation.left && currentLocation.right) { // iterate until we find a leaf
      if (value > currentLocation.value) {
        currentLocation = this.right;
      } else {
        currentLocation = this.left;
      }
    }
    if (value > currentLocation.value) {
      currentLocation.right = insertedNode;
    } else {
      currentLocation.left = insertedNode;
    }
    console.log(this);
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (target === this.value) {
      return true;
    } else if (this.left === null && this.right === null) { // are we at a leaf? if so, return false
      return false;
    } else if (target > this.value) {
      return this.right.contains(target);
    }
    return this.left.contains(target);
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this);
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
    this.contains(0);
  }
}

module.exports = BinarySearchTree;
