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

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(value);
      }
      this.left.insert(value);
    } else if (value > this.value) {
      if (!this.right) { 
        this.right = new BinarySearchTree(value); 
      }
      this.right.insert(value);
    }
  }

  contains(target) {
    if (target === this.value) return true;
    else if (this.left === null || this.right === null) return false;
    else if (target < this.value) return this.left.contains(target);
    else if (target > this.value) return this.right.contains(target);
  }

  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb);
    if (this.right !== null) this.right.depthFirstForEach(cb);
  }

  breadthFirstForEach(cb) {
    const queue = [];
    queue.push(this);
    for (let i = 0; i < queue.length; i++) {
      cb(queue[i].value);
      if (queue[i].left) queue.push(queue[i].left);
      if (queue[i].right) queue.push(queue[i].right);
    }
  }
}

module.exports = BinarySearchTree;
