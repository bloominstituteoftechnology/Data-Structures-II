// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.level = 0;
  }
  insert(value) {
    const node = new BinarySearchTree(value);
    const rec = (current) => {
      node.level++;
      if (current.value > value && !current.left) {
        current.left = node;
      } else if (current.value > value && current.left) {
        rec(current.left);
      } else if (current.value < value && !current.right) {
        current.right = node;
      } else if (current.value < value && current.right) {
        rec(current.right);
      }
    };
    rec(this);
  }
  contains(value) {
    let bool = false;
    const rec = (current) => {
      if (current.value === value) bool = true;
      if (current.value > value && current.left) rec(current.left);
      if (current.value < value && current.right) rec(current.right);
    };
    rec(this);
    return bool;
  }
  depthFirstForEach(cb) {
    const rec = (current) => {
      cb(current.value);
      if (current.left) rec(current.left);
      if (current.right) rec(current.right);
    };
    rec(this);
  }
  breadthFirstForEach(cb) {
    const queue = [];
    const rec = (current) => {
      if (current.level === 0) queue.push(current.value);
      if (current.left && current.left.level === current.level + 1) queue.push(current.left.value);
      if (current.right && current.right.level === current.level + 1) queue.push(current.right.value);
      if (current.left && (current.left.left || current.left.right)) rec(current.left);
      if (current.right && (current.right.left || current.right.right)) rec(current.right);
    };
    rec(this);
    queue.forEach(v => cb(v));
  }
}

module.exports = BinarySearchTree;
