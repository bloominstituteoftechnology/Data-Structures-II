/* eslint-disable */
// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
const Queue = require('./queue-helper');
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
    const findVal = (constructorVal) => {
      const whichDir = (value < constructorVal.value) ? 'left' : 'right';
      switch (whichDir) {
        case 'left':
        if (constructorVal.left === null) {
          constructorVal.left = new BinarySearchTree(value);
          return;
        }
        findVal(constructorVal.left);
        break;
        case 'right':
        if (constructorVal.right === null) {
          constructorVal.right = new BinarySearchTree(value);
          return;
        }
        findVal(constructorVal.right);
        break;
      }
    }
    findVal(this);
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    let returnBool = false;
    const passObj = (obj) => {
      if (obj.value === target) return returnBool = true;
      if (target < obj.value) {
        if (obj.left === null) return;
        passObj(obj.left);
      } else if (target >= obj.value) {
        if (obj.right === null) return;
        passObj(obj.right);
      }
    }
    passObj(this);
    return returnBool;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb); // this.left > cb(this.value) the new 'this' in the inner scope automatically refers to the passed argument (in realation to it)
      // note you cannot do depthFirstForEach(this.left) or something like that because you're then doing this.left(this.value)
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
    const newQueue = new Queue();
    newQueue.enqueue(this);
    while (!newQueue.isEmpty()) {
      const nodeObj = newQueue.dequeue(this);
      if (nodeObj.left) {
        newQueue.enqueue(nodeObj.left);
      }
      if (nodeObj.right) {
        newQueue.enqueue(nodeObj.right);
      }
      cb(nodeObj.value);
    }
  }
}

module.exports = BinarySearchTree;
