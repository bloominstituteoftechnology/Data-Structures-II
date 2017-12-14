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

  insert(value) {
    if (value <= this.value) {
      if (this.left !== null) {
        this.left.insert(value);
      } else {
        this.left = new BinarySearchTree(value);
      }
    } else if (this.right !== null) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }

  contains(target) {
    if (this.value === target) return true;
    if (this.left !== null) {
      if (this.left.contains(target)) return true;
    }
    if (this.right !== null) {
      if (this.right.contains(target)) return true;
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
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      cb(node.value);
      if (node.left !== null) queue.enqueue(node.left);
      if (node.right !== null) queue.enqueue(node.right);
    }
  }
}

module.exports = BinarySearchTree;
