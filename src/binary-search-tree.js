// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
const Queue = [];

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
<<<<<<< HEAD
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      { else {
        this.left.insert(value);
  }
} else {
  if (this.right === null) {
    this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
=======
    const node = new BinarySearchTree(value);
    if (value < this.value) {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = node;
      } else {
        this.right.insert(value);
      }
>>>>>>> 20ed24ed065b10a004caf567625909f9c317f0c8
    }
  }
}
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
<<<<<<< HEAD
    if (this.value === target) return true;
    if (target < this.value) {
       if (this.left == null) return false; 
       return this.left.contains(target);
    } else {
  }   if (this.right === null) return false;
      return this.right.contains(target);
}
    }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb);
    if (this.right !== null) this.right.depthFirstForEach(cb);
=======
    this.left = 1;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    this.left = 1;
>>>>>>> 20ed24ed065b10a004caf567625909f9c317f0c8
  }
}
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
<<<<<<< HEAD
    const queue = [];
    queue.push(this);
    for (let i = 0; i <queue.length; i++) {
      cb(queue[i].value); 
      if (queue[i].left) queue.push(queue[i]).left);
      if (queue[i].right) queue.push(queue[i].right);
    }
=======
    this.left = 1;
>>>>>>> 20ed24ed065b10a004caf567625909f9c317f0c8
  }
}

module.exports = BinarySearchTree;
