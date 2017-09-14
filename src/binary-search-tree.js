// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
const queue = require('./queue-helper');

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
    let currentTree = this;
    while (currentTree) {
      if (value > currentTree.value) {
        if (!currentTree.right) {
          currentTree.right = newTree;
          return;
        }
        currentTree = currentTree.right;
      } else {
        if (!currentTree.left) {
          currentTree.left = newTree;
          return;
        }
        currentTree = currentTree.left;
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    let currentTree = this;
    while (currentTree) {
      if (target === currentTree.value) {
        return true;
      }
      if (target < currentTree.value) {
        currentTree = currentTree.left;
      } else {
        currentTree = currentTree.right;
      }
    }
    return false;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);
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
  /* eslint-disable global-require */
  breadthFirstForEach(cb) {
    queue.enqueue(this);
    while (!queue.isEmpty()) {
      const currentTree = queue.dequeue();
      cb(currentTree.value);
      if (currentTree.left) {
        queue.enqueue(currentTree.left);
      }
      if (currentTree.right) {
        queue.enqueue(currentTree.right);
      }
    }
  }
}

module.exports = BinarySearchTree;
