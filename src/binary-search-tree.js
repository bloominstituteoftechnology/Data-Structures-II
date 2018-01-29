// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */

const Queue = require('./queue-helper.js')

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
    if (value < this.value) {
      if (this.left) this.left.insert(value);
      else this.left = new BinarySearchTree(value);
    } else {
      if (this.right) this.right.insert(value);
      else this.right = new BinarySearchTree(value);
    }
  }

    //const child = new BinarySearchTree(value);
    //if (child.value < this.value && !this.left) return this.left = child;
    //else if (child.value > this.value && !this.right) return this.right = child;
    //else if (child.value < this.value)
    //  this.left.insert(value);
    //else this.right.insert(value);

  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.value === target) return true;
    else if (target < this.value) {
      return !!this.left && this.left.contains(target);
    }
    else if (target > this.value) {
      return !!this.right && this.right.contains(target);
    }
    else return false;
  }

  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);
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
    const queue = new Queue(this);

    
    
  }
}

module.exports = BinarySearchTree;
