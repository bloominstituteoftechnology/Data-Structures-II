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
    if (value < this.value) {
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
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.value === target) return true;
    else if (target < this.value && this.left !== null) return this.left.contains(target);
    else if (target > this.value && this.right !== null) return this.right.contains(target);
    else return false; 
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    if (this !== null) cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb);
    if (this.right !== null) this.right.depthFirstForEach(cb);
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

// module.exports = BinarySearchTree;


binarySearchTree = new BinarySearchTree(10);
// bst.insert(11);
// bst.insert(20);
// bst.insert(5);
// bst.insert(6);
// bst.insert(2);
// bst.insert(8);
// bst.insert(9);
// bst.insert(20);
// bst.insert(18);
// bst.insert(25);
// console.log(bst);
// console.log(bst.contains(7));


const array = [];
const foo = value => ((array.push(value)));
binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.insert(9);
binarySearchTree.depthFirstForEach(foo);
console.log(array);