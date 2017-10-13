// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
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
  // my implementation of Chris' version:
  //  insert(value) {
  //   if (value <= this.value) {
  //     if (this.left === null) {
  //       this.left = new BinarySearchTree(value);
  //     } else {
  //       return this.left.insert(value); 
  //     } if (this.right === null) {
  //       this.right = new BinarySearchTree(value);
  //     } else {
  //       return this.right.insert(value);
  //     }

  // chris' (Sondros') version:
  //  insert(value) {
  //   if (value < this.value) {
  //     if (this.left === null) {
  //       this.left = new BinarySearchTree(value);
  //     } else {
  //       return this.left.insert(value);}
  //     } else if (this.right === null) {
  //     this.right = new BinarySearchTree(value);
  //     } else {
  //       return this.right.insert(value);
  //     }
    }
  // });
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (target < this.value)
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    const some = this.cb;
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const some = this.cb;
  }
}
// const newBST = new BinarySearchTree()
// console.log(newBST.insert(50))
// console.log(newBST)
// console.log(this.value)

    // this.right = [];
    // if (this.value)
    // if ( this value <= this.left.value) {
    //   this.left.value = this.left;
    //   console.log(left.value)
    // } else {
    //   this.left.value = this.right;
    //   console.log(right.value)
    // }
  //   const newInput = new BinarySearchTree({
  //     value,
  //     const checkValue = this.left.value;
  //     if (checkValue <= this.value) {
  //     this.left.value = this.left;
  //     } else {
  //     this.left = this.right;

module.exports = BinarySearchTree;
