// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable */

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

  /* Old solution : 
   insert(value) {
    const newNode = new BinarySearchTree(value); // haven't assigned where node lives, but still there
    // console.log(newNode);
    if (value < this.value) { // points to root 
      // move to left
      if (!this.left) { // if nothing is there, can go ahead and assign it
        this.left = newNode;
      } else {
        this.left.insert(value); // take value and run logic again 
        // recursive because of this line. It calls itself
      }
    } else if (value > this.value) {
      // move to the right
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  } */ 
  
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (target === this.value ) return true;
    if (target <= this.value) {
      if(this.left !== null){
        return this.left.contains(target);
      }
    }
    else {
      if (this.right!== null) {
        return this.right.contains(target);
      }
    }
    return false;
 }
 /* another: 
 contains(target) {
    if (this.value === target) return true;
    if (target < this.value) {
      if (this.left == null) return false;
      return this.left.contains(target);
    } // else {} 
    if (this.right === null) return false;
    return this.right.contains(target);
  } */ 
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {

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
