// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
const Queue = require('./queue-helper');

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
    const newNode = new BinarySearchTree(value);

    const lessOrMore = (currentNode) => {
      if (newNode.value >= currentNode.value) {
        if (currentNode.right === null) return currentNode.right = newNode;
        return lessOrMore(currentNode.right);
      }
      if (currentNode.left === null) return currentNode.left = newNode;
      return lessOrMore(currentNode.left);
    };
    lessOrMore(this);
  }

  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    let match = false;
    if (target === this.value) return match = true;

    const matching = (currentNode) => {
      if (target === currentNode.value) return match = true;
      if (target >= currentNode.value && currentNode.right !== null) return matching(currentNode.right);
      if (target < currentNode.value && currentNode.left !== null) return matching(currentNode.left);
    };
    
    matching(this);
    return match;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    const traverseDepth = (currentNode) => {
      cb(currentNode.value);
      if (currentNode.left !== null) traverseDepth(currentNode.left);
      if (currentNode.right !== null) traverseDepth(currentNode.right);
    };
    traverseDepth(this);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const queue = new Queue();

    const traverseBreadth = (currentNode) => {
      // Pushes the current node to the storage array
      queue.enqueue(currentNode);         
        
      // Loops over the binary search tree as long as the queue isn't empty
      while (!queue.isEmpty()) {
        // Removes node from array and stores reference to it
        const node = queue.dequeue();
        cb(node.value);

        // Pushes child nodes in array
        if (node.left !== null) queue.enqueue(node.left);
        if (node.right !== null) queue.enqueue(node.right);
      }
    };
    traverseBreadth(this);
  }
}

module.exports = BinarySearchTree;
