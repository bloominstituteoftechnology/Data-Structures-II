// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
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
    const newBST = new BinarySearchTree(value);
    if (value < this.value) {
      // If the value is less than the value of the node that it's being assigned
      // to, it goes to the left:
      if (!this.left) { // This checks to see if a left node already exists.
        this.left = newBST; // And if it doesn't, it assigns the new BST(value) to it.
      } else { // If there is already a node to the left, then .insert() value will
        this.left.insert(value); // place the new value in it's correct position in the left tree.
      }
    } else if (value > this.value) {
      // If the value is greater than the value of the node that it's being assigned
      // to, it goes to the right:
      if (!this.right) {
        this.right = newBST;
      } else { // does exist insert it
        this.right.insert(value);
      }
    } else if (value === this.value) {
      // If the value is the same as the value of the node that it's being assigned to,
      // It doesn't matter which way it is assigned. Pick one and be consistent:
      // I'll assign them to the right!:
      if (!this.right) {
        this.right = newBST;
      } else {
        this.right.insert(value);
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.value === target) { // Immediately checks the first node to see if
      return true; // it matches the target.
    }
    if (this.left && this.left.contains(target)) { // Checks if the left node exists
      return true; // and if it has a node that matches the target.
    }
    if (this.right && this.right.contains(target)) { // Same for the right.
      return true;
    }
    return false;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    // depthFirstForEach(cb) should iterate over the tree using DFS and
    // passes each node of the tree to the given callback function.
    cb(this.value);
    if (this.left) { // If left node exists, perform the the same function on
      this.left.depthFirstForEach(cb); // left tree node.
    }
    if (this.right) { // And vice versa.
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
    const Queue = [];
    Queue.push(this);
    for (let i = 0; i < Queue.length; i++) { // Performs the callback function on
      cb(Queue[i].value); // all of the nodes of the tree node that we're checking.
      if (Queue[i].left) { // If there's a tree node to the left, adds that left
        Queue.push(Queue[i].left); // tree node to the storage, allowing the callback
      } // to be performed on all of those nodes, as well.
      if (Queue[i].right) { // Same.
        Queue.push(Queue[i].right);
      }
    }
  }
}

module.exports = BinarySearchTree;
