// #### Binary Search Tree

  // * Should have the methods: `insert`, `contains`, `depthFirstForEach`, and `breadthFirstForEach`.
  // * `insert(value)` inserts the new value at the correct location in the tree.
  // * `contains(value)` searches the tree and returns `true` if the the tree contains the specified value.
  // * `depthFirstForEach(cb)` should iterate over the tree using DFS and passes each node of the tree to the given callback function.
  // * `breadthFirstForEach(cb)` should iterate over the tree using BFS and passes each node of the tree to the given callback function (hint: you'll need to either re-implement or import a queue data structure for this).

// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// const queue = require('./queue-helper.js');
// import queue from './queue-helper.js';

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
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    let found = false;
    let cachedNode = this;
    while (!found) {
      if (cachedNode.value === target) {
        found = true;
        break;
      } else if (target < cachedNode.value && cachedNode.left !== null) {
        cachedNode = cachedNode.left;
      } else if (target > cachedNode.value && cachedNode.right !== null) {
        cachedNode = cachedNode.right;
      } else {
        break;
      }
    }
    return found;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    function dfs(fn, node) {
      if (node) {
        if (fn) {
          fn(node.value);
        }
        dfs(fn, node.left);
        dfs(fn, node.right);
      }
    }
    dfs(cb, this);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  /* eslint-disable global-require */
  breadthFirstForEach(cb) {
    const q = new Queue();
    q.enqueue(this);
    
    while (!q.isEmpty()) {
      const node = q.dequeue();
      cb(node.value);
      if (node.left) {
        q.enqueue(node.left);
      }
      if (node.right) {
        q.enqueue(node.right);
      }
    }
  } 
}

const b1 = new BinarySearchTree(5);
b1.insert(2);
b1.insert(3);
b1.insert(7);
b1.insert(6);
b1.depthFirstForEach(console.log);
// console.log(b1.left.right.value);
// console.log(b1.contains(3));
// console.log(b1.contains(7));
// console.log(b1.contains(4));
module.exports = BinarySearchTree;
