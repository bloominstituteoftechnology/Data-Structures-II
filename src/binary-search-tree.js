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
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
        return;
      }
      this.left.insert(value);
    }
    if (value >= this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
        return;
      }
      this.right.insert(value);
    }  
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (target < this.value) {
      if (this.left === null) {
        return false;
      }
      return this.left.contains(target);
    }

    if (target > this.value) {
      if (this.right === null) {
        return false;
      }
      return this.right.contains(target);
    }
  }
  
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    this.value = cb(this.value);
    if (this.left != null) this.left.depthFirstForEach(cb);
    if (this.right != null) this.right.depthFirstForEach(cb);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const queue = [];
    queue.push(this);
    while (queue.length !== 0) {
      const node = queue[0];
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
      cb(queue.shift().value);
    }
  }
}

module.exports = BinarySearchTree;
