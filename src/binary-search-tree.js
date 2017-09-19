class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(x) {
    this.storage.push(x);
  }

  dequeue() {
    return this.storage.shift();
  }

  isEmpty() {
    return this.storage.length === 0;
  }
}
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  insert(value) {
    const newBinaryTreeNode = new BinarySearchTree(value);
    const treeNodeWalker = this;
    const walking = (treeNodeToAdd, currentTreeNode) => {
      if (newBinaryTreeNode.value < currentTreeNode.value) {
        if (currentTreeNode.left !== null) {
          walking(treeNodeToAdd, currentTreeNode.left);
          return;
        }
        currentTreeNode.left = newBinaryTreeNode;
        return;
      }
      if (currentTreeNode.right !== null) {
        walking(treeNodeToAdd, currentTreeNode.right);
        return;
      }
      currentTreeNode.right = newBinaryTreeNode;
    };
    walking(newBinaryTreeNode, treeNodeWalker);
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    const walking = (valueToFind, currentNode) => {
      if (currentNode.value === valueToFind) {
        return true;
      }
      if (valueToFind < currentNode.value) {
        if (currentNode.left !== null) {
          return walking(valueToFind, currentNode.left);
        }
        return false;
      }
      if (currentNode.right !== null) {
        return walking(valueToFind, currentNode.right);
      }
      return false;
    };
    return walking(target, this);
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    const walking = (currentNode) => {
      cb(currentNode.value);
      if (currentNode.left === null && currentNode.right === null) {
        return;
      }
      if (currentNode.left !== null) {
        walking(currentNode.left);
      }
      if (currentNode.right !== null) {
        walking(currentNode.right);
      }
    };
    walking(this);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const cacheQueue = new Queue();
    cacheQueue.enqueue(this);
    let currentNode = {};
    while (!cacheQueue.isEmpty()) {
      currentNode = cacheQueue.dequeue();
      if (currentNode.left !== null) {
        cacheQueue.enqueue(currentNode.left);
      }
      if (currentNode.right !== null) {
        cacheQueue.enqueue(currentNode.right);
      }
      cb(currentNode.value);
    }
  }
}

module.exports = BinarySearchTree;
