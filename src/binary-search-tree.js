// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */

const Queue = require('./queue-helper.js');

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
    const child = new BinarySearchTree(value);
    const compare = (val) => {
      if (val >= this.value) {
        if (this.right === null) {
          this.right = child;
        } else {
          this.right.insert(val);
        }
      } else if (val < this.value) {
        if (this.left === null) {
          this.left = child;
        } else {
          this.left.insert(val);
        }
      }
    };
    compare(child.value);
  }

  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.value === target) return true;

    let found = false;
    if (target > this.value) {
      if (this.right === null) {
        return false;
      }
      found = this.right.contains(target);
    } else if (target < this.value) {
      if (this.left === null) {
        return false;
      }
      found = this.left.contains(target);
    }
    return found;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    if (this.value !== null) cb(this.value);
    const dfs = (node, side) => {
      if (node !== null) {
        cb(node.value);
        dfs(node.left); // 2,
        dfs(node.right); // 3, 7,9
      }
    };
    if (this.left !== null) {
      dfs(this.left);
    }
    if (this.right !== null) {
      // iterate through all right nodes
      dfs(this.right);
    }
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
//   1. initialize a queue to hold nodes
//   2. enqueue the current node you’re at
//   3. iterate through the queue using something like `while (!queue.isEmpty())`
//   4. dequeue from the queue
//   5. check if the dequeue’d node has a left and right child
//   6. add those to the queue
//   7. call the callback on the node that was dequeue’d
    const queue = new Queue();
    queue.enqueue(this);
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      if (node.left !== null) {
        queue.enqueue(node.left);
      }
      if (node.right !== null) {
        queue.enqueue(node.right);
      }
      cb(node.value);
    }
  }
}


module.exports = BinarySearchTree;
