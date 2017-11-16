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
    while (true) {
      if (value > currentLocation.value) { // is insert value bigger than current value?
        if (currentLocation.right) { // do we have a right node?
          currentLocation = currentLocation.right; // if no 
        } else {
          currentLocation.right = insertedNode;
          return undefined;
        }
      } else {
        if (currentLocation.left) {
          currentLocation = currentLocation.left;
        } else {
          currentLocation.left = insertedNode;
          return undefined;
        }
      }
    }
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
const bst = new BinarySearchTree(20);
bst.insert(29);
bst.insert(19);
bst.insert(102);
bst.insert(10);
console.log(bst);
bst.insert(11);
console.log(bst);
bst.insert(0.13);
console.log(bst);
