class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
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
    let bool = false;
    const search = (node) => {
      if (value === node.value) bool = true;
      if (node.left) search(node.left);
      if (node.right) search(node.right);
    };
    search(this);
    return bool;
  }
  depthFirstForEach(cb, node = this) {
    cb(node.value);
    if (node.right) this.depthFirstForEach(cb, node.right);
    if (node.left) this.depthFirstForEach(cb, node.left);
  }
}
module.exports = BinarySearchTree;
