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

  contains(value) {
    // search tree and return true if tree contains specified value
    let currentNode = this;

    while (currentNode) {
      if (currentNode.value === value) return true;

      if (currentNode.value > value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return false;
        }
      }
      if (currentNode.value < value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return false;
        }
      }
    }
  }

  depthFirstForEach(cb) {
    // iterate over tree using DPS and passes each node of the tree to the given cb
    let currentNode = this;
    const exploredNodes = [];

    while (currentNode) {
      if (currentNode.left) {
        exploredNodes.push(currentNode.value);
        currentNode = currentNode.left;
      }
      if (currentNode.right) {
        exploredNodes.push(currentNode.value);
        currentNode = currentNode.right;
      }
      exploredNodes.push(currentNode.value);
      break;
    }
    exploredNodes.forEach(node => cb(node));
  }
}

module.exports = BinarySearchTree;
