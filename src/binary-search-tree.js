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
    if(value < this.value) {
      if(this.left) {
        this.insert(value);
      } else {
        this.left = new BinarySearchTree(value);
      }
    } else {
      if(this.right) {
        this.insert(value);
      } else {
        this.right = new BinarySearchTree(value);
      }
    }
    //Recursion will create the new BST when insert is called
    //from within itself
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if(this.value === target) return true;
    if(this.left && this.left.contains(target)) return true;
    if(this.right && this.right.contains(target)) return true;
    return false;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);
    if(this.left) this.depthFirstForEach(cb);
    if(this.right) this.right.depthFirstForEach(db);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const queue = [];
    queue.push(this);
    const queueLength = gueue.length;
    for(let i = 0; i<queueLength; i++) {
      if(queue[i].left) queue.push(queue[i].left);
      if(queue[i].right) queue.push(queue[i].right);
    }
  }
}

module.exports = BinarySearchTree;
