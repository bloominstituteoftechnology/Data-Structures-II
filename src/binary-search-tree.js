// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(val) {
    if (val < this.value && this.left === null) {
      this.left = new BinarySearchTree(val);
    } else if (val < this.value && this.left !== null) {
      this.left.insert(val);
    } else if (val > this.value && this.right === null) {
      this.right = new BinarySearchTree(val);
    } else if (val > this.value && this.right !== null) {
      this.right.insert(val);
    }
  }
  contains(y) {
    if (this.value === y) {
      return true;
    } else if (y > this.value && this.right !== null) {
      return this.right.contains(y);
    } else if (y < this.value && this.left !== null) {
      return this.left.contains(y);
    }
    return false;
  }
  depthFirstForEach(cb) {
    function recurr(bst) {
      cb.call(bst, bst.value);
      if (bst.left !== null) {
        recurr(bst.left);
      }
      if (bst.right !== null) {
        recurr(bst.right);
      }
    }
    recurr(this);
  }
}

module.exports = BinarySearchTree;
