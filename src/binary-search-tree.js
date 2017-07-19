class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
<<<<<<< HEAD
  insert(value) {
=======
//   root(value) {
//     this.root = value;
//   }
  insert(value) {
//     let tempRoot = this;
//     if (!tempRoot) {
//       tempRoot = new BinarySearchTree(value);
//       return;
//     }
>>>>>>> 6287670a445200ab2366a97ec0edc382c9bb30ba
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
<<<<<<< HEAD
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
    if (node.left) this.depthFirstForEach(cb, node.left);
    if (node.right) this.depthFirstForEach(cb, node.right);
=======
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
>>>>>>> 6287670a445200ab2366a97ec0edc382c9bb30ba
  }
}
module.exports = BinarySearchTree;
