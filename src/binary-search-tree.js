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
    const node = new BinarySearchTree(value);
    if (value < this.value) {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = node;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {

    if (this.value === target) return true;
    if (target < this.value) {
      if (this.left === null) return false;
      return this.left.contains(target);
    } else if (target > this.value) {
      if (this.right === null) return false;
      return this.right.contains(target);

    }
  }

  depthFirstForEach(cb) {

    cb(this.value);
    if (this.left) this.left.depthFirstForEach(cb);
    if (this.right) this.right.depthFirstForEach(cb);

  }

  breadthFirstForEach(cb) {

    const Queue = [];
    Queue.push(this);
    for (let i = 0; i < Queue.length; i++) {
      cb(Queue[i].value);
      if (Queue[i].left) Queue.push(Queue[i].left);
      if (Queue[i].right) Queue.push(Queue[i].right);

    }
  }
}

module.exports = BinarySearchTree;
