// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    let currentNode = this;

    while (currentNode) {
      if (newNode.value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      } else if (newNode.value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
        }
        currentNode = currentNode.right;
      } else {
        break;
      }
    }
  }

  contains() {}

  depthFirstForEach() {}
}

module.exports = BinarySearchTree;
