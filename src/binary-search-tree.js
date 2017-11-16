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
    const insertedNode = new BinarySearchTree(value);
    let currentLocation = this;
    while (true) {
      if (value > currentLocation.value) { // is insert value bigger than current value?
        if (currentLocation.right) { 
          currentLocation = currentLocation.right;
        } else {
          currentLocation.right = insertedNode;
          return;
        }
      } else { // is insert value smaller than the current value?
        if (currentLocation.left) {
          currentLocation = currentLocation.left;
        } else {
          currentLocation.left = insertedNode;
          return;
        }
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (target === this.value) {
      return true;
    } else if (this.left === null && this.right === null) { // are we at a leaf? if so, return false
      return false;
    } else if (target > this.value) {
      return this.right.contains(target);
    }
    return this.left.contains(target);
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb);
    }
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
  breadthFirstForEach(cb) {
    const breadthQueue = new Queue();
    const rootNode = [this];
    const enqueueValues = (nodeArray) => {
      const childArray = [];
      for (let i = 0; i < nodeArray.length; i++) {
        breadthQueue.enqueue(nodeArray[i].value);
        if (nodeArray[i].left) childArray.push(nodeArray[i].left);
        if (nodeArray[i].right) childArray.push(nodeArray[i].right);
      }
      if (childArray.length) {
        enqueueValues(childArray);
      }
    };
    enqueueValues(rootNode);
    while (!breadthQueue.isEmpty()) {
      cb(breadthQueue.dequeue());
    }
  }
}

class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(x) {
    this.storage.push(x);
  }

  dequeue() {
    return this.storage.shift();
  }

  isEmpty() {
    return this.storage.length === 0;
  }
}

module.exports = BinarySearchTree;
