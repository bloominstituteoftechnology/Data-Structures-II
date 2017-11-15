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
    const newBT = new BinarySearchTree(value);
    if (this.value === undefined) {
      this.value = newBT;
    }
    if (this.value > value && this.left === undefined) {
      this.left = newBT;
    } else if (this.value < value && this.right === undefined) {
      this.right = newBT;
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    let foundVal = false;
    const recurse = (value) => {
      value = this.value;
      if (target === value) {
        foundVal = true;
      } else if (this.left !== undefined && value > target) {
        recurse(this.left);
      } else if (this.right !== undefined && value < target) {
        recurse(this.right);
      }
    };
    recurse(this);
    return foundVal;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    const recurse = (value) => {
      cb.call(value, this.value);
      if (this.left !== undefined) {
        recurse(this.left);
      }
      if (this.right !== undefined) {
        recurse(this.right);
      }
    };
    recurse(this);
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
