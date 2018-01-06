const Queue = require('./queue-helper');
// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */

/* #### Binary Search Tree

  * Should have the methods: `insert`, `contains`, `depthFirstForEach`, and `breadthFirstForEach`.
  * `insert(value)` inserts the new value at the correct location in the tree. For values that are equal to their
  *  parent, it doesn't matter whether those values go in the left subtree or the right subtree; just pick one and
  *  be consistent with it.
  * `contains(value)` searches the tree and returns `true` if the the tree contains the specified value.
  * `depthFirstForEach(cb)` should iterate over the tree using DFS and passes each node of the tree to the given
  * callback function.
  * `breadthFirstForEach(cb)` should iterate over the tree using BFS and passes each node of the tree to the given
  * callback function (hint: you'll need to either re-implement or import a queue data structure for this).
*/

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
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.value === target) {
      return true;
    } else if (this.left !== null && this.left.contains(target)) {
      return true;
    } else if (this.right !== null && this.right.contains(target)) {
      return true;
    } else if (this.right) {
      if (this.right.contains(target)) return true;
    }
    return false;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb);
    if (this.right !== null) this.right.depthFirstForEach(cb);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const queue = new Queue();
    queue.enqueue(this);
    while (!(queue.isEmpty())) {
      const thisNode = queue.dequeue();
      cb(thisNode.value);
      if (thisNode.left !== null) queue.enqueue(thisNode.left);
      if (thisNode.right !== null) queue.enqueue(thisNode.right);
    }
  }
}

module.exports = BinarySearchTree;
