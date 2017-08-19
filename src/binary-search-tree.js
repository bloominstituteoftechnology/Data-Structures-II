// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(stuff) {
    const node = new BinarySearchTree(stuff);
    function recurse(bst) {
      if (stuff < bst.value && bst.left === null) {
        bst.left = node;
      } else if (stuff < bst.value) {
        recurse(bst.left);
      } else if (stuff > bst.value && bst.right === null) {
        bst.right = node;
      } else if (stuff > bst.value) {
        recurse(bst.right);
      }
    }
    recurse(this);
  }
  contains(value) {
    if (value === this.value) {
      return true;
    } else if (value > this.value && this.right !== null) {
      return this.right.contains(value);
    } else if (value > this.value && this.right === null) {
      return false;
    } else if (value < this.value && this.left !== null) {
      return this.left.contains(value);
    } else if (value < this.value && this.left === null) {
      return false;
    }
  }
  depthFirstForEach(cb) {
  // pass each node to cb
    cb(this.value);
    if (this.left !== null) {
      return this.left.depthFirstForEach(cb);
    } else if (this.right !== null) {
      return this.right.depthFirstForEach(cb);
    }
  }
}

module.exports = BinarySearchTree;
