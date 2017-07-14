// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // Create a root
  /* const bst = {
    this.root = null;
  } */
  // Insert method
  insert(value) {
    // Create node equal to BST(value)
    const node = new BinarySearchTree(value);
    // Create search and deploy function
    const adder = (bst) => {
      // Check if value is less than bst.v
      if (value < bst.value && bst.left === null) {
        bst.left = node;
      } else if (value < bst.value) {
        adder(bst.left);
      } else if (value > bst.value && bst.right === null) {
        bst.right = node;
      } else if (value > bst.value) {
        adder(bst.right);
      }
    };
    adder(this);
  }
  contains(target) {
    let result = false;
    const search = (bst) => {
      if (target === bst.value) {
        result = true;
      } else if (target < bst.value && bst.left !== null) {
        search(bst.left);
      } else if (target > bst.value && bst.right !== null) {
        search(bst.right);
      }
    };
    search(this);
    return result;
  }
  depthFirstForEach(cb) {
    const deep = (bst) => {
      cb.call(bst, bst.value);
      if (bst.left !== null) {
        deep(bst.left);
      }
      if (bst.right !== null) {
        deep(bst.right);
      }
    };
    deep(this);
  }
}

module.exports = BinarySearchTree;
