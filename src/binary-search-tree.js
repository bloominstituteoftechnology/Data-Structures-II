// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
class Queue {
  constructor() {
    const storage = [];
  }
  enqueue(n) {
    this.storage.push(n);
  }
  dequeue() {
    return this.storage.shift();
  }
}
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.children = [this.left, this.right];
  }
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  insert(value) {
    // check values to see if it goes to the right or left
    // when encountering multiple nodes already set, recurse through BST to find the end that fits its own 
    const thruTree = ((node) => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = new BinarySearchTree(value);
          return;
        } else if (node.left !== null) {
          return thruTree(node.left);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = new BinarySearchTree(value);
          return;
        } else if (node.right !== null) {
          return thruTree(node.right);
        }
      } return null;
    });
    return thruTree(this);
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    const findValue = ((node) => {
     // if (node === null) return;
      if (target === node.value) return true;
      if (node.left === null && node.right === null) return false;
      else if (target < node.value) {
        if (node.left === null) return false;
        return findValue(node.left);
      } else if (target > node.value) {
        if (node.right === null) return false;
        return findValue(node.right);
      }
      return false;
    });
    return findValue(this);
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    const deepDive = ((node) => {
      const allArr = [];
      cb(node.value);
      allArr.push(node.left && deepDive(node.left));
      allArr.push(node.right && deepDive(node.right));
    });
    return deepDive(this);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const queued = [];
    const result = [];
    queued.push(this);
    while (queued.length > 0) {
      const currentNode = queued.shift();
      result.push(currentNode.value);
      if (currentNode.left !== null) queued.push(currentNode.left);
      if (currentNode.right !== null) queued.push(currentNode.right);
    }
    result.forEach(item => cb(item));
  }
}

module.exports = BinarySearchTree;
