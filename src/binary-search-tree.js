// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
const Queue = require('./queue-helper')

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    const newNode = new BinarySearchTree(value);  
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      // move to the right
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }
  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left !== null && this.left.contains(target)) {
      return true;
    }
    if (this.right !== null && this.right.contains(target)) {
      return true;
    }
    return false;
  }
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb);
    if (this.right !== null) this.right.depthFirstForEach(cb);
  }
  breadthFirstForEach(cb) {
    const queue = new Queue();
    queue.enqueue(this);
    while (!(queue.isEmpty())) {
      const thisNode = queue.dequeue();
      cb(thisNode.value);
      if (thisNode.left !== null) queue.enqueue(thisNode.left);
      if (thisNode.right !== null) queue.enqueue(thisNode.right);
    }
  }
}

module.exports = BinarySearchTree;
