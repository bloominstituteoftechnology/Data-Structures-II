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
    // if value is less than root, go left
    if (value < this.value) {
      if (!this.left) { 
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }

    // if value is greater than root, go right
    if (value > this.value) {
      if (this.right) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    } 
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    // target value has been found in the tree
    if (this.value === target) {
      return true;
    }
    // root value is less than the target value
    if (target < this.value) {
      if (this.left !== null) { 
        return this.left.contains(target);
      } 
    } else if (target > this.value) {
      if (this.right !== null) {
        return this.right.contains(target);
      }
    }
    return false;
  }

  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    // cb function takes action on each node as we traverse tree
    cb(this.value); 
    // if root node has a left child node, it will call function
    if (this.left) { 
      this.left.depthFirstForEach(cb);
    }
    // if root node has a right child node, it will call function
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
    const queue = new Queue();
    queue.enqueue(this); // start queue with root node
    while (queue.storage.length) { // while loop runs as long as queue is not empty
      const treeNode = queue.dequeue(); // take node out of queue, and work on it with callback
      cb(treeNode);
      // if node has left or right child, push them into the queue
      if (treeNode.left) {
        queue.enqueue(treeNode.left); 
      } 
      if (treeNode.right) {
        queue.enqueue(treeNode.right);
      }
    }
  }
}

module.exports = BinarySearchTree;
