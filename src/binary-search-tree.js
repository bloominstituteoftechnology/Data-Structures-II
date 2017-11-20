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
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = newNode;
      } else {
      this.right.insert(value);
      }
    }
    return newNode;
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.value === target) return true;
    if (target < this.value) {
      if (this.left === null) return false;
      return this.left.contains(target);
    } else {
      if (this.right === null) return false;
      return this.right.contains(target);
    }
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    const rootNode = new BinarySearchTree(this.value);
    if (!rootNode.value) {
      return null;
    } else {
      const depthTraverse = node => {
      cb(node.value);
      if (node.left) depthTraverse(node.left);
      if (node.right) depthTraverse(node.right);
      };
      depthTraverse(rootNode);
    }
/*Resolution from teacher Ivan*/
  //   cb(this.value);
  //   if (this.left !== null) this.left.depthFirstForEach(cb);
  //   if (this.right !== null) this.right.depthFirstForEach(cb);
  // }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const queue = [];
    queue.push(this);
    for (let i = 0; i < queue.length; i++) {
      cb(queue[i].value);
      if(queue[i].left) queue.push(queue[i].left);
      if(queue[i].right) queue.push(queue[i].right);   
    }
  }
}
module.exports = BinarySearchTree;
