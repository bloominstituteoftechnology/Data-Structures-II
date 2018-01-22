/* eslint-disable */
// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
const Queue = require('./queue-helper');

class BinarySearchTree {
  constructor(value) {
    // Pass in a value for the Tree/Tree node into (using Quakka example) the "shoe box labelled myBinary.value"
    this.value = value;
    // Set its left child and right child to null
    // From FunFunFunction Recursion -- this just means "does not have any sub-categories"
    // How is null different from []???
    this.left = null;
    this.right = null;
  }
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  insert(value) {
    // ??? I know you have to use the 'new' keyword when creating instances, but why do you need to use it
    // when creating a new binary search tree? Is each of these new nodes basically a new instance of the
    // BinarySearchTree class???
    const newNode = new BinarySearchTree(value);
    // ??? If I wanted to assign a value to the Tree node, how woudl I do that? ???
    // So is this saying: IF 'value' is less than the Tree node, THEN...
    // if(!value){
    // this.value = new Node(val)
    // return;
    if (value < this.value) {
      // if this.left (the next left node) is not yet defined(aka the space there is available), then newNode becomes this.left
      if (!this.left) {
        this.left = newNode;
      } else {
        // Read this SLOWLY to understand what is happening withe dot notation below:
        // https://www.codecademy.com/en/forum_questions/5170307264a7402d9a0012f5
        // otherwise [if this.left DOES exist - this is implied because bang operator ! is used], for example, if the Tree node
        // is 10, and this.left is occupied by the value 9, then this.left.insert(value) tells the computer to make that node
        // the 'value' in the insert function.
        // For example if you are looking to enter the value 8, and 'this.value' - the Tree node is 10, then the first IF
        // statement is true (8 < 10).  Lets say the node left of the Tree node is 9.  Then this.left is defined, and 9 becomes
        // the 'value' in insert(value).  So again, (think of the definition of binary trees) 9 is compared with this.value
        // which equals 10.  Since 9 is less than 10, the next IF statement checks if 9 has a this.left.  It does!  this.left of 9
        // is 
        // To us insert(value) on a specific array of values (this.left)
        this.left.insert(value);
      }
      // implied -> If the value is equal to or greater than this.value, then proceed here.
    } else {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value); // Using dot notation, chaining the function.  this.right is the array 
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.value === target) {
      return true;
    }
    // if this.value has a defined this.left
    if (this.left) {
      // then for this.left....ACK! Same notation from earlier!  Don't know how it works???????????
      if (this.left.contains(target)) return true;
    }
    if (this.right) {
      if (this.right.contains(target)) return true;
    }
    return false;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) { // Common Interview topic
    // Passing the Tree node into the cb function means that each node in the entire tree is, one by one, starting with the left
    // branch
    cb(this.value);
    // traverse down the left side completely first, until there are no more this.left nodes (aka we reach the leaf node)
    if (this.left) {
      this.left.depthFirstForEach(cb);
    }
    // As soon as this.left comes up undefined, then you traverse down the right side.  Each time you go through
    // through depthFirstForEach, the computer will see that...??? and this is where I get lost.
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
  breadthFirstForEach(cb) { // Common Interview Question 
    // Declares a new instance of the Queue class called 'queue'
    const queue = new Queue();
    // Pushes 'this'???cb? onto the this.storage array
    queue.enqueue(this);
    // Assuming that the tree is not empty,
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      // if a left node exists
      if (node.left) {
        // push 'node.left'??? onto the this.storage array
        queue.enqueue(node.left);
      }
      // if the right node exists
      if (node.right) {
        // push 'node.right'??? onto the this.storage array
        queue.enqueue(node.right);
      }
      cb(node.value);
    }
  }
}



module.exports = BinarySearchTree;