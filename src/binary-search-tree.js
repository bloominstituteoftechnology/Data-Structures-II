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
    const node = new BinarySearchTree(value);
    const val = (bin) => {
      node.level++;
      if (bin.value > value && !bin.left) {
        bin.left = node;
      } else if (bin.value > value && bin.left) {
        val(bin.left);
      } else if (bin.value < value && !bin.right) {
        bin.right = node;
      } else if (bin.value < value && bin.right) {
        val(bin.right);
      }
    };
    val(this);
  }

  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    const findinTree = (val) => {
      if (!val) return false;
      if (val.value === target) return true;
      return findinTree(val.left) || findinTree(val.right);
    };
    return findinTree(this);
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    const rec = (current) => {
      cb(current.value);
      if (current.left) rec(current.left);
      if (current.right) rec(current.right);
    };
    rec(this);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const queue = [];
    const val = (bre) => {
      if (bre.level === 0) queue.push(bre.value);
      if (bre.left && bre.left.level === bre.level + 1) queue.push(bre.left.value);
      if (bre.right && bre.right.level === bre.level + 1) queue.push(bre.right.value);
      if (bre.left && (bre.left.left || bre.left.right)) val(bre.left);
      if (bre.right && (bre.right.left || bre.right.right)) val(bre.right);
    };
    val(this);
    queue.forEach(v => cb(v));
  }
}

module.exports = BinarySearchTree;
