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
    if (value >= this.value) {
      if (!this.right) this.right = new BinarySearchTree(value)
      else this.right.insert(value);
    } 
    else if (value <= this.value) {
      if (!this.left) this.left = new BinarySearchTree(value)
      else this.left.insert(value);
  }
};
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.value === target) return true;
      if (target < this.value) {
        if (!this.left)return false
        else return this.left.contains(target)
    }
    else if (target > this.value) {
      if(!this.right) return false
      else return this.right.contains(target)
    }
  };
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {

    cb(this.value); // cb function takes action on each node as we traverse tree
    if (this.left) this.left.depthFirstForEach(cb); // if root node has a left child node, it will call function
    if (this.right) this.left.depthFirstForEach(cb); //if root node has a right child node, it will call function
    }

  };
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    let queue = [this]

    while (queue.length) {
      let treeNode = queue.shift()
        cb(treenode)

      if (treeNode.left) queue.push(treeNode.left)
      if (treeNode.right) queue.push(treeNode.right)
    }
  }

module.exports = BinarySearchTree;
