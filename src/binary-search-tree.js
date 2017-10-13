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
    const newBST = new BinarySearchTree(value);
    if (value < this.value) {
      if (this.left === null) {
        this.left = newBST;
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = newBST;
      } else {
        this.right.insert(value);
      }
    }
  }

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
  // });
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  // contains(target) {
  //   if (this.value === target) return true;
  //   if (this.left && this.left.contains(target)) return true;
  //   if (this.right && this.right.contains(target)) return true;
  //   return false;
  // }
  contains(target) {
    if (this.value === target) return true; // if value is found, return true; otherwise --> continue
    if (target < this.value) { // if value is not found prior run this check.
      if (this.left === null) return false; // if target is less than value, check this.left.value and if that matches return true otherwise recurse.
      return this.left.contains(target);
    } else if (target > this.value) {
      if (this.right === null) return false; 
      return this.right.contains(target);
    }
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
// const newBST = new BinarySearchTree(50)
// console.log(newBST)
// const newBST01 = newBST.insert(100)
// console.log(newBST)
// const newBST02 = newBST.insert(45)
// console.log(newBST)
// const newBST03 = newBST.insert(101)
// console.log(newBST)
// const newBST04 = newBST.insert(15)
// console.log(newBST)
// const newBST05 = newBST.insert(200)
// console.log(newBST)
// const newBST06 = newBST.insert(115)
// console.log(newBST)
// const newBST07 = newBST.insert(25)
// console.log(newBST)

// console.log(newBST.contains())
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
