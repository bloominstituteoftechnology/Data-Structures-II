// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// ---------------------------------------------------------------
const Queue = require('./queue-helper');
// ---------------------------------------------------------------
class BinarySearchTree {
  constructor(value, parent) {
    !!parent ? parent : parent = null;  
    //------------------------------------------------------------
    this.value = value;
    this.size = 1;
    this.parent = parent;
    this.root = null;    
    this.left = null;
    this.right = null;
    //------------------------------------------------------------
    if (this.parent !== null) {
      this.root = parent.root;
      this.root.size++;
      this.size = this.root.size;
    }
  }
  // -------------------------------------------------------------
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  // -------------------------------------------------------------
  insert(value) {
    if (value < this.value) {
      if (this.left === null) { 
        this.left = new BinarySearchTree(value, this); 
      } else {
        this.left.insert(value);
      } 
    } else if (this.right === null) { 
      this.right = new BinarySearchTree(value, this); 
    } else { this.right.insert(value); }
  }
  // -------------------------------------------------------------
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  // -------------------------------------------------------------
  // Should be the fastest recursion because it checks the child:
  // -------------------------------------------------------------
  contains(target) { 
    if (this.value === target) { return true; }
    if (this.left !== null) { 
      if (this.left.value === target) { return true; }
      return this.left.contains(target); 
    } 
    if (this.right !== null) {
      if (this.right.value === target) { return true; }
      return this.right.contains(target);
    }
    return false;      
  }
  /*
  //--------------------------------------------------------------
  // Alts:
  // -------------------------------------------------------------
  contains2(target) {
    if (this.value === target) { return true; }
    if (this.left !== null) { 
      if (this.left.value === null) { return false; }
      return this.left.contains(target);
    } 
    if (this.right === null) { return false; } 
    return this.right.contains(target);
  }
  // -------------------------------------------------------------
  contains3(target) {
    if (this.value === target) { return true; }
    if (this.value > target) { 
      if (this.left.value === null) { return false; }
      return this.left.contains(target); 
    }
    if (this.right === null) { return false; } 
    return this.right.contains(target);  
  }
  // -------------------------------------------------------------
  contains4(target) {
    if (this.value === target) { return true; }
    if (this.left && this.left.contains(target)) { return true; }
    if (this.right && this.right.contains(target)) { return true; }
    return false;
  }
  // -------------------------------------------------------------
  */
  // -------------------------------------------------------------
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  // -------------------------------------------------------------
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left !== null) { this.left.depthFirstForEach(cb); }
    if (this.right !== null) { this.right.depthFirstForEach(cb); }
  }
  // -------------------------------------------------------------
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  // -------------------------------------------------------------
  breadthFirstForEach(cb) {
    const queue = new Queue();
    queue.enqueue(this);
    for (; !queue.isEmpty();) {
      const tree = queue.dequeue();
      cb(tree.value);
      if (tree.left !== null) { queue.enqueue(tree.left); }
      if (tree.right !== null) { queue.enqueue(tree.right); }
    }
  }
}
  // -------------------------------------------------------------
  class RedBlackTree extends BinarySearchTree {
  super(value) {
    this.isRed = null;
    this.checkRed();
    this.blackDepth = null;
    this.blackHeight = null;

  }
  // -------------------------------------------------------------
  checkRed() {
    if (this.parent.isRed === null && this.parent !== null) {
      this.isRed = true;
    }
  }
}
/*
// ---------------------------------------------------------------
const binTree = new BinarySearchTree(-1);
binTree.root = binTree;
// ---------------------------------------------------------------
binTree.insert(10);
binTree.insert(5);
binTree.insert(40);
binTree.insert(20);
binTree.insert(2100);
binTree.insert(300);
binTree.insert(200);
binTree.insert(800);
binTree.insert(900);
binTree.insert(1200);
/*
// ---------------------------------------------------------------
console.log('binTree:', binTree);
console.log(binTree.contains(5));
console.log(binTree.contains(2100));
console.log(binTree.contains(40));
console.log(binTree.contains(1200));
console.log(binTree.contains(0));
// ---------------------------------------------------------------
console.log('\n');
console.log('binTree:', binTree);
*/
// ---------------------------------------------------------------

  
// ---------------------------------------------------------------
module.exports = BinarySearchTree;
