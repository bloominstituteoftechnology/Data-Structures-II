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
    const newNode = new BinarySearchTree(value);
    const assing = (rootNode) => {
      if (rootNode.value >= value && rootNode.left === null) {
        rootNode.left = newNode;
        return;
      }
      if (rootNode.value >= value) assing(rootNode.left);
      if (rootNode.value <= value && rootNode.right === null) {
        rootNode.right = newNode;
        return;
      }
      if (rootNode.value <= value) assing(rootNode.right)
    };
    assing(this);
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    let foundNode = false;
    const finder = (rootNode) => {
      if (rootNode.value === target) {
        foundNode = true;
      } else if (rootNode.left !== null && target < rootNode.value) {
        finder(rootNode.left);
      } else if (rootNode.right !== null && target > rootNode.value) {
        finder(rootNode.right);
      }
    };
    finder(this);
    return foundNode;
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
