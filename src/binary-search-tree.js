// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(value) {
    return this.storage.push(value);
  }

  dequeue() {
    return this.storage.shift();
  }

  get size() {
    return this.storage.length;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    const node = new BinarySearchTree(value);
    const addtoTree = (val) => {
      if (val.value >= value) {
        if (!val.left) return val.left = node;
        return addtoTree(val.left);
      }
      if (val.value <= value) {
        if (!val.right) return val.right = node;
        return addtoTree(val.right);
      }
    };
    return addtoTree(this);
  }
  contains(value) {
    const findinTree = (val) => {
      if (!val) return false;
      if (val.value === value) return true;
      return findinTree(val.left) || findinTree(val.right);
    };
    return findinTree(this);
  }

  depthFirstForEach(cb) {
    const search = (val) => {
      if (val) {
        cb(val.value);
        search(val.left);
        search(val.right);
      }
    };
    return search(this);
  }

  breadthFirstForEach(cb) {
    const queue = new Queue();
    queue.enqueue(this);
    while (queue.size) {
      const currentTree = queue.dequeue();
      if (cb) {
        cb(currentTree.value);
      }
      if (currentTree.left) {
        queue.enqueue(currentTree.left);
      }
      if (currentTree.right) {
        queue.enqueue(currentTree.right);
      }
    }
  }
}

module.exports = BinarySearchTree;

// #### Binary Search Tree

//   * Should have the methods: `insert`, `contains`, `depthFirstForEach`, and `breadthFirstForEach`.
//   * `insert(value)` inserts the new value at the correct location in the tree.
//   * `contains(value)` searches the tree and returns `true` if the the tree contains the specified value.
//   * `depthFirstForEach(cb)` should iterate over the tree using DFS and passes each node of the tree to the given callback function.
//   * `breadthFirstForEach(cb)` should iterate over the tree using BFS and passes each node of the tree to the given callback function
//      (hint: you'll need to either re-implement or import a queue data structure for this).
