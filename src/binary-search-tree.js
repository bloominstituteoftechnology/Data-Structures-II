// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// const { Queue } = require('./queue-helper');

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
    const newBT = new BinarySearchTree(value);
    if (this.value > value) {
      if (!this.left) { 
        this.left = newBT; 
      } else {
        this.left.insert(value);
      }
    } else if (this.value < value) {
      if (!this.right) { 
        this.right = newBT; 
      } else {
        this.right.insert(value);
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (target === this.value) return true;
    if (this.value > target && this.left) return this.left.contains(target);
    if (this.value < target && this.right) return this.right.contains(target);
    return false;
  
    // recurse(this);
  //  return foundVal;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    

    }
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    

  }
}
const myTree = new BinarySearchTree(9);
console.log(myTree.contains(4));
console.log(myTree.insert(3));
console.log(myTree.insert(5));
console.log(myTree.insert(12));
console.log(myTree.insert(8));
console.log(myTree.insert(66));
console.log(myTree.insert(4));

module.exports = BinarySearchTree;

