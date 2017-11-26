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
    const node = this;
    if (value <= node.value) {
      if (!node.left) node.left = new BinarySearchTree(value);
      else {
        node.left.insert(value);
      }
    } else if (value > node.value) {
      if (!node.right) node.right = new BinarySearchTree(value);
      else (node.right.insert(value));
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    const node = this;
    if (target === node.value) return true;
    if (target <= node.left) {
      if (!node.left) return false;
      else if (node.left) {
        return node.left.contains(target);
      }
    } else if (target > node.value) {
      if (!node.right) return false;
      else if (node.right) {
        return node.right.contains(target);
      }
    }
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to the value of each tree node in the process
  depthFirstForEach(cb) {
    const node = this;
    cb(node.value);
    if (node.left) depthFirstForEach(node.left);
    if (node.right) depthFirstForEach(node.right);
    return;
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const node = this;
  }
}

module.exports = BinarySearchTree;
