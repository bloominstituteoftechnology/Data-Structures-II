// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx

/**
* #### Binary Search Tree
* Should have the methods: `insert`, `contains`, `depthFirstForEach`, and `breadthFirstForEach`.
* `insert(value)` inserts the new value at the correct location in the tree.
* `contains(value)` searches the tree and returns `true` if the the tree contains the specified value.
* `depthFirstForEach(cb)` should iterate over the tree using DFS and passes each node of the tree to the
*  given callback function.
* `breadthFirstForEach(cb)` should iterate over the tree using BFS and passes each node of the tree to
* the given callback function (hint: you'll need to either re-implement or import a queue data structure
* for this).
*/

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const leaf = new BinarySearchTree(value);
    const sprout = (node) => {
      if (node.value > value && node.left) sprout(node.left);
      else if (node.value > value) node.left = leaf;
      else if (node.value < value && node.right) sprout(node.right);
      else if (node.value < value) node.right = leaf;
    };
    sprout(this);
  }

  contains(value) {
    let searchResult = false;
    const search = (node) => {
      if (node.value === value) {
        searchResult = true;
        return;
      } else if (node.value > value && node.left) search(node.left);
      else if (node.value < value && node.right) search(node.right);
    };
    search(this);
    return searchResult;
  }

  depthFirstForEach(cb) {
    const values = [];
    const each = (node) => {
      values.push(node.value);
      if (node.left) each(node.left);
      if (node.right) each(node.right);
    };
    each(this);
    values.forEach(value => cb(value));
  }

  breadthFirstForEach(cb) {
    const queue = [];
    const values = [];
    let node;
    queue.push(this);
    while (queue.length) {
      node = queue.shift();
      values.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    values.forEach(value => cb(value));
  }
}

module.exports = BinarySearchTree;
