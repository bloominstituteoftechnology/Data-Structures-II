// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
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
    // assign something using 'this' keyword to make linter happy
    const recurOnThis = this;
    // create a new tree, because the value has to go somewhere
    const bsTree = new BinarySearchTree(value);
    // use recursion to check if our value is > or < the value of each node we check
    // assign value only when we find a side === null
    const recur = (side, val) => {
      if (side.value < val) {
        if (side.right === null) {
          return side.right = bsTree;
        }
        recur(side.right, val);
      } else if (side.value > val) {
        if (side.left === null) {
          return side.left = bsTree;
        }
        recur(side.left, val);
      }
    };
    // call the recursion function
    recur(recurOnThis, value);
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    const recurOnThis = this;
    let result = false;
    // use the same recursion as before, but with an extra check for the given target value
    // return false if we need to move to a node that does not exist
    const recur = (side, val) => {
      if (side.value === val) return result = true;
      if (side.value < val) {
        if (side.right === null) {
          return result = false;
        }
        recur(side.right, val);
      } else if (side.value > val) {
        if (side.left === null) {
          return result = false;
        }
        recur(side.left, val);
      }
    };
    recur(recurOnThis, target);
    return result;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    const recurOnThis = this;
    const recur = (side) => {
      cb(side.value);
      if (side.left) recur(side.left);
      if (side.right) recur(side.right);
    };
    recur(recurOnThis);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const q = new Queue();
    q.enqueue(this);
    while (!q.isEmpty()) {
      const currentTree = q.dequeue();
      if (currentTree.left) q.enqueue(currentTree.left);
      if (currentTree.right) q.enqueue(currentTree.right);
      cb(currentTree.value);
    }
  }
}

module.exports = BinarySearchTree;
