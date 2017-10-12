// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value >= this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);      
      } else {
        this.left.insert(value);
      }
    }
  }

  contains(target) {
    if (target === this.value) return true;
    if (target >= this.value && this.right !== null) {
      if (target === this.right.value) return true;
      this.right.contains(target);
    }
    if (target < this.value && this.left !== null) {
      if (target === this.left.value) return true;
      this.left.contains(target);
    }
    return false;
  }

  depthFirstForEach(cb) {

  }

  breadthFirstForEach(cb) {

  }
}

module.exports = BinarySearchTree;
