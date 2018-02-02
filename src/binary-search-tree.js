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
    this.queue = new Queue();
  }
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  insert(value) {
    if (value <= this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.value === target) {
      return true;
    }

    if (target < this.value) {
      if (this.left === null) {
        return false;
      }
      return this.left.contains(target);
    } else if (target > this.value) {
      if (this.right === null) {
        return false;
      }
      return this.right.contains(target);
    }
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
  breadthFirstForEach(cb) {
    const container = this.queue.storage;
    const arr = [];
    if (!this) {
      return;
    }
    this.queue.enqueue(this);
    while (container.length > 0) {
      const currentNode = container[0];
      
      if (currentNode.left !== null) {
        this.queue.enqueue(currentNode.left);
      }
      if (currentNode.right !== null) {
        this.queue.enqueue(currentNode.right);
      }
      arr.push(this.queue.dequeue());
    }
  }
}

const fam = new BinarySearchTree(1);
fam.insert(2);
fam.insert(6);
fam.insert(1);
fam.insert(9);
fam.insert(1);
// console.log(fam);
// console.log('------------');
// console.log(fam.right);
// console.log('------------');
// console.log(fam.left);
console.log(fam.breadthFirstForEach());

module.exports = BinarySearchTree;
