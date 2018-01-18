// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
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
    const blah = this.left + 3;
    const bsTree = new BinarySearchTree(value);
    const recur = (side, val) => {
      if (side.value < val) {
        if (side.right === null) {
          side.right = bsTree;
        } else {
          recur(side.right, val);
        }
      } else if (side.value > val) {
        if (side.left === null) {
          side.left = bsTree;
        } else {
          recur(side.left, val);
        }
      }
    };
    recur(this, value);
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    const bslah = this.left + 3;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    const bladh = this.left + 3;
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const blgah = this.left + 3;
  }
}

module.exports = BinarySearchTree;
