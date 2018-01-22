// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable */

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
    // create new node to be inserted
    const newNode = new BinarySearchTree(value);
    // check root node, if insert value is less than root value
    if(value < this.value) {
      // check left node, if its tempty then assign newNode to left
      if(!this.left){
        this.left = newNode;
      }else{
        // if its not empty then call this 'left's insert method again
        // if we just call this 'insert' without the 'left' then we are refering
        // to the root node, therefore 'this'.value would be root node's value
        // if we use this.left.insert then this.value would 
        // refer to the root's left's value
        this.left.insert(value);
      }
    }else{
      if(!this.right){
        this.right = newNode;
      }else{
        this.right.insert(value);
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    // check root node
    if(target === this.value) return true;
    // check if target is less or more that this.value
    if(target < this.value && this.left){
      // if target is less than this.value and left node exists
      // we call this.left's contain method to continue checking the left side
      return this.left.contains(target);
    }else if(target > this.value && this.right){
    // we got target is larger than the this.value and right node exist
      return this.right.contains(target);
    }
    // otherwise nothing matches then we return false
    return false;
  }

  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);
    if(this.left){
      this.left.depthFirstForEach(cb);
    }
    if(this.right){
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
    const queue = new Queue(); // create new queue / storage array
    queue.enqueue(this); // push root node to array
    while (!queue.isEmpty()) { // while array is not empty
      const node = queue.dequeue(); // remove first node in array and assign it to node
      if (node.left) { // if node has left node
        queue.enqueue(node.left); // push left node to array
      }
      if (node.right) { // if node has right node
        queue.enqueue(node.right); // push right node to array
      }
      cb(node.value); // invode call back with current node's value and repeat process
    }
  }
}

module.exports = BinarySearchTree;
