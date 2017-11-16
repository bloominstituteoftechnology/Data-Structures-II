// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// const { LimitedArray, getIndexBelowMax } = require('./queue-helper');

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
/* 
  
  -set the root using the class constructor.  
  - if the insert value is lower than root, and the left is empty, insert to the left.
  - if higher, check the right and insert to the right.

*/
  insert(value) {
    const newBT = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newBT;
      } else {
        this.left.insert(value);
      }
    }  
    if (value > this.value) {
      if (!this.right) {
        this.right = newBT;
      } else {
        this.right.insert(value);
      }
    }
  }
/*


*/
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively 
  /* 

    - if the root value is the same as search return true.
    - search in the direction of 'target, lower => left, rising => right.
    - once value is found, return true if not, false.

  */
  contains(target) {
    if (this.value === target) return true;
    if (this.value < target && this.right) return this.right.contains(target);
    if (this.value > target && this.left) return this.left.contains(target);
    return false;
  }
  /*


  */
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process

  depthFirstForEach(cb) {
    cb((value) => {
      if (this.left) {
        this.left.depthFirstForEach(cb);
      }
      if (this.right) {
        this.right.depthFirstForEach(cb);
      }
    });
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    this.queue = this.storage;
    this.queue.push(this.value);
    while (!this.queue.isEmpty()) {
      const node = this.dequeue();
      if (cb) {
        cb(node);
      }
      if (!this.left) {
        this.queue.push(this.left);
      }
      if (!this.right) {
        this.queue.push(this.right);
      }
    }
  }
}

module.exports = BinarySearchTree;
