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
    if (value < this.value) {
      // move to the left
      if (!this.left) {  // doesn't exist then create it
        this.left = newNode;
      } else { // does exist insert it
        this.left.insert(value);
      }
    } else if (value > this.value) {
      // move to the right
      if (!this.right) {  // doesn't exist then create it
        this.right = newNode;
      } else { // does exist insert it
        this.right.insert(value);
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left !== null && this.left.contains(target)) {
      return true;
    }
    if (this.right !== null && this.right.contains(target)) {
      return true;
    }
    return false;
  }
  // // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstForEach(cb);
    }
    if (this.right !== null) {
      this.right.depthFirstForEach(cb);
    }
  }
  // // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // // at the root node, going down to the root node's children, and iterating
  // // through all those nodes first before moving on to the next layer of nodes
  // // Applies the given callback to each tree node in the process
  // // You'll need the queue-helper file for this. Or could you roll your own queue
  // // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    console.log(this);
    // const queue = [];
    // queue.push(this);
    //   for (let i = 0; i < queue.length; i++) {
    //     cb(queue[i].value);
    //     if (queue[i].left) {
    //       queue.push(queue{i}.left);
    //     if (queue)
    //     }
    //   })
  }
}

module.exports = BinarySearchTree;
