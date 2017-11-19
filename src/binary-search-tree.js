// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
<<<<<<< HEAD
// const { Queue } = require('./queue-helper');
=======
const { Queue } = require('./queue-helper');
>>>>>>> 71f6d2e6f1a480d753653e14d941a43df311c9ee

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
/* 
  
  -set the root using the class constructor.  
  - if the insert value is lower than root, and the left is empty, insert to the left.
  - if higher, check the right and insert to the right.

*/
  insert(value) {
    const newBT = new BinarySearchTree(value);
<<<<<<< HEAD
    if (this.value > value) {
      if (!this.left) { 
        this.left = newBT; 
      } else {
        this.left.insert(value);
      }
    } else if (this.value < value) {
      if (!this.right) { 
        this.right = newBT; 
=======
    if (value < this.value) {
      if (!this.left) {        // if (this.left === null) this.left = new BinarySearchTree(value)
        this.left = newBT;     
      } else {
        this.left.insert(value);
      }
    }  
    if (value > this.value) {
      if (!this.right) {     // if (this.right === null) this.right = new BinarySearchTree(value)
        this.right = newBT;
>>>>>>> 71f6d2e6f1a480d753653e14d941a43df311c9ee
      } else {
        this.right.insert(value);
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively 
  /* 

    - if the root value is the same as search return true.
    - search in the direction of 'target, lower => left, rising => right.
    - once value is found, return true if not, false.
    - note: while loop could be faster for larger trees.

  */
  contains(target) {
<<<<<<< HEAD
    if (target === this.value) return true;
    if (this.value > target && this.left) return this.left.contains(target);
    if (this.value < target && this.right) return this.right.contains(target);
    return false;
  
    // recurse(this);
  //  return foundVal;
=======
    if (this.value === target) return true;
    // be careful using single line if-statements, can be problematic when debugging.
    if (this.value < target && this.right) return this.right.contains(target);
    if (this.value > target && this.left) return this.left.contains(target);
    return false;
>>>>>>> 71f6d2e6f1a480d753653e14d941a43df311c9ee
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  /*
   
   - use recursion to search as far ahead as possible then move backwards.

  */ 
  depthFirstForEach(cb) {
<<<<<<< HEAD
    

    }
=======
    cb((value) => {
      value = this.value;
      if (this.left) {
        this.left.depthFirstForEach(cb);
      }
      if (this.right) {
        this.right.depthFirstForEach(cb);
      }
    });
    /* Ivans solution:
     cb(this.value);
     if (this.left !== null) this.left.depthFirstForEach(cb);
     ... do this for the right as well
    */
>>>>>>> 71f6d2e6f1a480d753653e14d941a43df311c9ee
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
<<<<<<< HEAD
    

=======
    const queue = new Queue();
    queue.enqueue(this);
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      if (cb) {
        cb(node.value);
      }
      if (!node.left) {
        queue.enqueue(node.left);
      }
      if (!node.right) {
        queue.enqueue(node.right);
      }
    }
>>>>>>> 71f6d2e6f1a480d753653e14d941a43df311c9ee
  }
  /* Ivans solution:
    const queue = [];
    queue.push(this);
    for (let i = 0; i < queue.length; i++) {
      cb(queue[i].value);
      if (queue[i].left) queue.push(queue[i].left);
      if( queue[i].right) queue.push(queue[i].right);
    }
  */
}
<<<<<<< HEAD
const myTree = new BinarySearchTree(9);
console.log(myTree.contains(4));
console.log(myTree.insert(3));
console.log(myTree.insert(5));
console.log(myTree.insert(12));
console.log(myTree.insert(8));
console.log(myTree.insert(66));
console.log(myTree.insert(4));
=======
>>>>>>> 71f6d2e6f1a480d753653e14d941a43df311c9ee

module.exports = BinarySearchTree;

