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
    const addtoTree = (val) => {
      if (val.value >= value) {
        if (!val.left) return val.left = node;
        return addtoTree(val.left);
      }
      if (val.value <= value) {
        if (!val.right) return val.right = node;
        return addtoTree(val.right);
      }
    };
    return addtoTree(this);
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    let find = false;
    const search = (node) => {
      if (node.value === target) {
        find = true;
        return;
      } else if (node.value > target && node.left) search(node.left);
      else if (node.value < target && node.right) search(node.right);
    };
    search(this);
    return find;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    const values = [];
    const each = (node) => {
      cb(node.value);
      if (node.left) each(node.left);
      if (node.right) each(node.right);
    };
    each(this);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  /* eslint-disable global-require */
  breadthFirstForEach(cb) {
    const queue = [];
    let node;
    queue.push(this);
    while (queue.length) {
      node = queue.shift();
      cb(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
}

module.exports = BinarySearchTree;
