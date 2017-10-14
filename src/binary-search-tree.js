// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
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
  //   const gn = new GraphNode({ value, edges: [] });
  //   if (edges.length === 0) {
  //     if (this.vertices.length > 0) {
  //       this.vertices[this.vertices.length - 1].pushToEdges(gn);
  //       gn.pushToEdges(this.vertices[this.vertices.length - 1]);
  //     }
  //   }
  //   edges.forEach(edge => {
  //     edge.pushToEdges(gn);
  //     gn.pushToEdges(edge);
  //   });
  //   this.vertices.push(gn);
  //   return gn;
  // }
  // get vertexValues() {
  //   return this.vertices.reduce((memo, v) => {
  //     memo.push(v.value);
  //     return memo;
  //   }, []);
  }

  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (target === this.value) { return true; }
    if (this.left !== null && target < this.value) { return this.left.contains(target); }
    if (this.right !== null && target >= this.value) { return this.right.contains(target); }
    return false;
  }

  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left !== null) { this.left.depthFirstForEach(cb); }
    if (this.right !== null) { this.right.depthFirstForEach(cb); }
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
    while (!queue.isEmpty()) {
      const element = queue.dequeue();
      if (element.left !== null) { queue.enqueue(element.left); }
      if (element.right !== null) { queue.enqueue(element.right); }
      cb(element.value);
    }
  }
}

module.exports = BinarySearchTree;
