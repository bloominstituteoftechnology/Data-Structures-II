// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
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
    if (value >= this.value) {
      if (this.right) this.insert.call(this.right, value);
      else this.right = new BinarySearchTree(value);
    }
    if (value < this.value) {
      if (this.left) this.insert.call(this.left, value);
      else this.left = new BinarySearchTree(value);
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    let flag = false;
    if (target === this.value) {
      flag = true;
      return flag;
    }
    if (target > this.value) {
      if (this.right) flag = this.contains.call(this.right, target);
    }
    if (target < this.value) {
      if (this.left) flag = this.contains.call(this.left, target);
    }
    return flag;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left) this.depthFirstForEach.call(this.left, cb);
    if (this.right) this.depthFirstForEach.call(this.right, cb);
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
    const w = new Queue();
    let distance = 0;
    const que = (x) => {
      distance++;
      if (q.isEmpty() && (x.value)) {
        q.enqueue([x.value, distance]);
        distance++;
      }      
      if (x.left && x.left.value) q.enqueue([x.left.value, distance]);
      if (x.right && x.right.value) q.enqueue([x.right.value, distance]);
      if (x.left) que(x.left);
      if (x.right) que(x.right);
    };
    que(this);
    while (q.isEmpty() === false) {
      const store = q.dequeue();
      cb(store[0]);
    }
  }
}

module.exports = BinarySearchTree;
