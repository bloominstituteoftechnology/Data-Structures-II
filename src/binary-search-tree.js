// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx


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
    if (this.value === 'undefined') {
      const newNode = new BinarySearchTree(value);
    }
    if (this.value === true) {
      if (value > this.value) {
        this.right = new BinarySearchTree(value);
      } else if (value < this.value) {
        this.left = new BinarySearchTree(value);
      }
    }
  }

  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (target === this.value) return true; // base case
    if (target < this.value) {
      if (!this.left) return false;
      return this.left.contains(target);
    } else if (target > this.value) {
      if (!this.right) return false;
      return this.right.contains(target);
    }
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);
    this.left.depthFirstForEach(cb);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    if (this.value === null) return;
  }

}
module.exports = BinarySearchTree;
