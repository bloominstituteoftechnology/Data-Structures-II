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
    const node = new BinarySearchTree(value);
    if (this.value > value && this.left === null) {
      this.left = node;
    } else if (this.value > value) {
      return this.left.insert(value);
    } else if (this.value < value && this.right === null) {
      this.right = node;
    } else {
      return this.right.insert(value);
    }
  }

  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.value === target) {
      return true;
    } else if (this.left !== null && target <= this.left.value) {
      return this.left.contains(target);
    } else if (this.right !== null && target >= this.right.value) {
      return this.right.contains(target);
    } return false;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    // BinarySearchTree.prototype.depthFirstLog = function(cb){
    const recurse = (bst) => { // defined a variable called recurse, which is a function, with an arg of bst
      cb.call(bst, bst.value); // we call the callback function, that is in the root of bst, passing in bst and bst.value
      if (bst.left !== null) { // if the left is not null
        recurse(bst.left); // go left
      } 
      if (bst.right !== null) { // if the right is not null
        recurse(bst.right); // go right
      }   
    };
    recurse(this); // calling the recursive function at the root
    // }
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const bfsQueue = new Queue(); // setting a new queue
    bfsQueue.enqueue(this); // enqueue root node
    while (!bfsQueue.isEmpty()) { // while the array is not empty
      const node = bfsQueue.dequeue(); // dequeue the first item
      if (node.left) { // if theres a node to the left
        bfsQueue.enqueue(node.left); // enqueue
      }
      if (node.right) { // if there's a node to the right
        bfsQueue.enqueue(node.right); // enqueue
      }
      cb(node.value); // callback function on the current node's value
    }
  }
}

module.exports = BinarySearchTree;
