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

  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  insert(value) {
    const child = new BinarySearchTree(value);  // newBST = value
    if (child.value < this.value) {
      if (this.left === null) {
        this.left = child;
      } else {
        this.left.insert(value);
      }
    }

    if (child.value > this.value) {
      if (this.right === null) {
        this.right = child;
      } else {
        this.right.insert(value);
      }
    }
  }

  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    // value = target? true
    // if target < value -> left.contains(value)
    // if target > value -> right.contains(value)
    // false
    if (this.value === target) return true;
    if (this.left && target < this.value) return this.left.contains(target);
    if (this.right && target > this.value) return this.right.contains(target);
    return false;
  }

  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process

  depthFirstForEach(cb) {
    // run callback on current node's value
    // if left, call depthFirstForEach on left
    // if right, call depthFirstForEach on right
    // don't forget to pass the callback down!
    cb(this.value);
    if (this.left) this.left.depthFirstForEach(cb);
    if (this.right) this.right.depthFirstForEach(cb);
  }

  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const queue = new Queue();
    queue.enqueue(this);

    while (!queue.isEmpty()) {
      const { value, left, right } = queue.dequeue();
      cb(value);
      if (left) queue.enqueue(left);
      if (right) queue.enqueue(right);
    }
  }
}

module.exports = BinarySearchTree;
