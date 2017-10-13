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
    const helper = (curTree) => {
      if (curTree.value > newTree.value && curTree.left !== null) {
        helper(curTree.left);
      } else if (curTree.value <= newTree.value && curTree.right !== null) {
        helper(curTree.right);
      } else if (curTree.value > newTree.value && curTree.left === null) {
        curTree.left = newTree;
      } else if (curTree.value <= newTree.value && curTree.right === null) {
        curTree.right = newTree;
      }
    };
    helper(this);    
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    let result = false;
    const helper = (curTree) => {
      if (curTree.value === target) {
        result = true;
        return;
      }
      if (curTree.left !== null) {
        helper(curTree.left);
      }
      if (curTree.right !== null) {
        helper(curTree.right);
      }
    };
    helper(this);
    return result;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    const helper = (curTree) => {
      cb(curTree.value);
      if (curTree.left !== null) {
        helper(curTree.left);
      }
      if (curTree.right !== null) {
        helper(curTree.right);
      }
    };
    helper(this);
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
