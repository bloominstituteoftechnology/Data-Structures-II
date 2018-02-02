// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/*eslint-disable*/
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
  if(value <= this.value){
  if (this.left === null){
    this.left = new BinarySearchTree(value);
  }else {
    this.left.insert(value);
   } 
  } else if(value > this.value){
  if (!this.right){
    this.right = new BinarySearchTree(value);
   } else {
    this.right.insert(value);
   }
     }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
  let node = this;
  while(node !== null){
  if (target === node.value) return true;
    if (target <= node.value){
    node = node.right;
  } else {
    node = node.left;
  }

 }
 return false;
  
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    if (node) {
      cb(node.value);
      if (node.left) {
        this.depthFirstForEach(node.left, cb);
      }
      if (node.right) {
        this.depthFirstForEach(node.right, cb);
    }
  }

  }
 
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
  
  }
}
module.exports = BinarySearchTree;
