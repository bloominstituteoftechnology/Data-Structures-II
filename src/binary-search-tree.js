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
  contains(val) {
    if (val === null) {
      return false;
    } else if (val === this.value) {
      return true;
    } else if (val > this.value) {
      return this.right.contains(val);
    } else if (val < this.value) {
      return this.left.contains(val);
    }
    return false;
  }
  depthFirstForEach() {

  }
}

module.exports = BinarySearchTree;
