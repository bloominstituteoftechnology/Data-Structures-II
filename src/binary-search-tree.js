// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(newValue) {
    // root varibale to represent root of
    // tree and compare new values against
    const treeRoot = this.value;
    // node variable to insert new values
    // and contiue w/ binary tree structure
    const node = new BinarySearchTree(newValue);
    // if the newValue is <= the root value
    if (newValue <= treeRoot) {
      // and left node holds no value
      if (!this.left) {
        // value of left node becomes node
        this.left = node;
        // if there is a left node, call insert
      } else {
        // recursively on it with the new value
        // to continue searching for empty node
        this.left.insert(newValue);
      } // if the newValue is > the root variable
    } else if (newValue > treeRoot) {
      // and right node holds no value
      if (!this.right) {
        // value of right becomes node
        this.right = node;
        // if there is a right node, call insert
      } else {
        // recursively on it with the new value
        // to continue searching for empty node
        this.right.insert(newValue);
      }
    }
  }
  contains() {
    // should have a working "contains" method
    // tree.insert(2);
    // tree.insert(3);
    // tree.insert(7);
    // expect binarySearchTree.contains(7) to be => true
    // expect binarySearchTree.contains(8) to be => false
  }
  depthFirstForEach() {
    // should execute a callback on every value in a tree using "depthFirstForEach"
    // const array = [];
    // const foo = value => ((array.push(value)));
    // binarySearchTree.insert(2);
    // binarySearchTree.insert(3);
    // binarySearchTree.depthFirstForEach(foo);
    // expect array to equal => [5, 2, 3]
  }
}

module.exports = BinarySearchTree;
