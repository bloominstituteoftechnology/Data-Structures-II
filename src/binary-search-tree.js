class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
//   root(value) {
//     this.root = value;
//   }
  insert(value) {
//     let tempRoot = this;
//     if (!tempRoot) {
//       tempRoot = new BinarySearchTree(value);
//       return;
//     }
    let currentNode = this;
    const newNode = new BinarySearchTree(value);
    while (currentNode) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }
  contains(value) {
    let currentNode = this;
    while (currentNode) {
      if (value < currentNode.value) {
        if (value === currentNode.value) return true;
        currentNode = currentNode.left;
      } else {
        if (value === currentNode.value) return true;
        currentNode = currentNode.right;
      }
    }
    return false;
  }
  depthFirstForEach(cb, node = this) {
    cb(node.value);
    if (node.right) this.depthFirstForEach(cb, node.right);
    if (node.left) this.depthFirstForEach(cb, node.left);
  }
}
module.exports = BinarySearchTree;
