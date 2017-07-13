// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const search = (n) => {
      if (n.value >= value) {
        if (n.left === null) {
          return n.left = new BinarySearchTree(value);
        }
        return search(n.left);
      }
      if (n.right === null) {
        return n.right = new BinarySearchTree(value);
      }
      return search(n.right);
    };
    return search(this);
  }

  contains(value) {
    const search = (n) => {
      if (n === null) return false;
      if (n.value === value) return true;
      return search(n.left) || search(n.right);
    };
    return search(this);
  }

  depthFirstForEach(cb) {
    const loop = (n) => {
      if (n === null) return;
      cb(n.value);
      loop(n.left);
      loop(n.right);
      return;
    };
    return loop(this);
  }
}

module.exports = BinarySearchTree;
