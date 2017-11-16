// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// Binary tree is like a phone book
// open up to middle of phone & search from there, L's and on
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
    const newNode = new BinarySearchTree(value); // haven't assigned where node lives, but still there
    //console.log(newNode);
    if (value < this.value) { // points to root 
      //move to left
      if (!this.left) { // if nothing is there, can go ahead and assign it
        this.left = newNode;
      } else {
        this.left.insert(value); // take value and run logic again 
      }
    } else if (value > this.value ) {
      //move to the right
    }



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
    let found = false;
    let cachedNode = this;
    while (!found) {
      if (cachedNode === target) {
        found = true;
        break;
      } else if (target < cachedNode.value && cachedNode.left !== null) {
        cachedNode = cachedNode.left;
      } else if (target > cachedNode.value && cachedNode.right !== null) {
        cachedNode = cachedNode.right;
      } else {
        break;
      }
    } return found;
  }    
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    const inOrder = (node) => {
      if (node.left !== null) {
        inOrder(node.left); 
      } process.call(this, node);
      if (node.right !== null) {
        inOrder(node.right);
      }
    };
    inOrder(this.root);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const curr = cb;
    if (curr) {
     // console.log(curr.value);
      this.breadthFirstForEach(curr.left);
      this.breadthFirstForEach(curr.right);
    }
  }
}

const myTree = new BinarySearchTree(5);
console.log(myTree.insert(4));

module.exports = BinarySearchTree;
