// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
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
    const insertedNode = new BinarySearchTree(value);
    let currentLocation = this;
    // While we have some left and some right value to compare against!
    while (value > currentLocation.value || value < currentLocation.value) {
      if (value > currentLocation.value) { // is insert value bigger than current value?
        if (currentLocation.right) { // do we have a right node?
          currentLocation = currentLocation.right; // if no 
        } else {
          currentLocation.right = insertedNode;
          return undefined;
        }
      } else if (currentLocation.left) {
        currentLocation = currentLocation.left;
      } else {
        currentLocation.left = insertedNode;
        return undefined;
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    let current = this;
    while (current) {
      if (target === current.value) {
        return true;
      }
      if (target < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    const traversePreOrder = (node) => {
      cb(node.value); // Call the Callback on the First item and every item after that!
      if (node.left) { // If there is a left node, then go left!
        traversePreOrder(node.left); // Recursive call until there is no more left nodes!
      }
      if (node.right) { // If there is a right node, then go right!
        traversePreOrder(node.right); // Recursive call until there is no more right nodes!
      }
    };
    traversePreOrder(this); // Execute traversePreOrder on the tree!
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const myQueue = [];
    myQueue.push(this);

    while (myQueue.length > 0) {
      const node = myQueue.shift();
      cb(node.value);
      if (node.left !== null) {
        myQueue.push(node.left);
      }
      if (node.right !== null) {
        myQueue.push(node.right);
      }
    }
  }
}

module.exports = BinarySearchTree;

// const kb = (value) => {
//   console.log(value);
// }
// let bst = new BinarySearchTree(15);
// bst.insert(10);
// bst.insert(20);
// bst.insert(8);
// bst.insert(12);
// bst.insert(16);
// bst.insert(25);
// bst.breadthFirstForEach(kb);
// bst.depthFirstForEach(kb);
// console.log(bst);
// console.log(bst.contains(18))
