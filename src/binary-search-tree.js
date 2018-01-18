// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable */
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.root = null;
  }
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  insert(value) {
    if (value <= this.value) { // if input value is less than or equal to root node value
      if (!this.left) { // check if left child exists
        this.left = new BinarySearchTree(value); // if left child does not exist, assign new BST to that location
      }
      else this.left.insert(value); // if left child already exists, call insert again on the left child node
    }
    if (value > this.value) { // if input value is greater than root node value
      if (!this.right) { // check if right child exists
        this.right = new BinarySearchTree(value); // if right child does not exist, assign new BST to that location
      }
      else this.right.insert(value); // if right child already exists, call insert again on the right child node
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    let containsValue = false; // initialize flag
    if (this.value === target) return containsValue = true; // if current node value equals target, return true
    if (target < this.value) { // if target value is less than current value
      if (!this.left) return containsValue; // check if left child exists. if not, return false
      return this.left.contains(target); // if left child exists, call contains on this node
    }
    if (target > this.value) { // if target value is greater than current node value
      if (!this.right) return containsValue; // check if right child node exists. if not, return false
      return this.right.contains(target); // if right child exists, call contains on this node
    }
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {

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

module.exports = BinarySearchTree;
