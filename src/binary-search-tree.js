// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    const node = new BinarySearchTree(value);
    function recurse(bst) {
      if (bst.value > value && bst.left === null) {
        bst.left = node;
      } else if (bst.value > value) {
        recurse(bst.left);
      } else if (bst.value < value && bst.right === null) {
        bst.right = node;
      } else if (bst.value < value) {
        recurse(bst.right);
      }
    }
    recurse(this);
  }

  contains(value) {
    let doesContain = false;
    function recurse(bst) {
      if (bst.value === value) {
        doesContain = true;
      } else if (bst.left !== null && value < bst.value) {
        recurse(bst.left);
      } else if (bst.right !== null && value > bst.value) {
        recurse(bst.right);
      }
    }
    recurse(this);
    return doesContain;
  }

  depthFirstForEach(callback) {
    function recurse(bst) {
      callback.call(bst, bst.value);
      if (bst.left !== null) {
        recurse(bst.left);
      }
      if (bst.right !== null) {
        recurse(bst.right);
      }
    }
    recurse(this);
  }
}

module.exports = BinarySearchTree;
