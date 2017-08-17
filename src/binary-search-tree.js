// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.root = this.root.add(value);
  }
  contains(value) {
    let found = false;
    let current = this.root;
    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return value;
  }
  add(value) {
    if (value < this.value) {
      if (this.left) return this.left.has(value);
    } else if (value > this.value) {
      if (this.right) return this.right.has(value);
    } else if (value === this.value) {
      return true;
    } else return false;
  }
    }


module.exports = BinarySearchTree;
