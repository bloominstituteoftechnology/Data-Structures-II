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
    if (value < this.value) {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.insert(value);
      }
    } else if (this.value < value) {
      if (this.right === null) {
        this.right = node;
      } else {
        this.right.insert(value);
      }
    } 
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (target === this.value) {
      return true;
    } else if (target < this.value) {
      if (this.left === null) {
        return false;
      }
      return this.left.contains(target);
    } else if (target > this.value) {
      if (this.right === null) {
        return false;
      }
      return this.right.contains(target);
    }
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    function depthCheck(node) {
      if (node !== null) {
        cb(node.value);
        depthCheck(node.left);
        depthCheck(node.right);
      }
    }
    depthCheck(this);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const newQueue = new Queue();
    newQueue.enqueue(this);
    
    while (!newQueue.isEmpty()) {
      const temp = newQueue.dequeue();
      if (temp !== null) {
        cb(temp.value);
        if (temp.left !== null) {
          newQueue.enqueue(temp.left);
        }
        if (temp.right !== null) {
          newQueue.enqueue(temp.right);
        }
      }
    }
  }
}

module.exports = BinarySearchTree;
