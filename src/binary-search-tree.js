// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
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
    // insert needs to instantiate a new node
    const newNode = new BinarySearchTree(value);
    // insert needs to check if the root node is equal
    // or less than the value passed into it.
    if (value <= this.value) {
      // now it inserts the value to the left
      this.left = new BinarySearchTree(value);
    }
    // or since it was not less than or equl to the root
    // node then it has to insert it to the right.
    this.right = new BinarySearchTree(value);
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    let findsTarget = false;
    if (target === this.value) return findsTarget = true;
    if (target < this.value) {
      const search = (left) => {
        left.forEach((leftValue) => {
          if (target === this.value) return findsTarget = true;
          if (target < left.value) {
            search(leftValue.left);
          }
        });
      };
      search(this.right);
      return findsTarget;
    }
    if (target > this.value) {
      const search = (right) => {
        right.forEach((rightValue) => {
          if (target === this.value) return findsTarget = true;
          if (target < right.value) {
            search(rightValue.right);
          }
        });
      };
      search(this.right);
      return findsTarget;
    }
  }
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
