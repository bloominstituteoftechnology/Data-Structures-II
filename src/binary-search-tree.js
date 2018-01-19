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
    const search = (newNode) => {
      const newBinaryTree = new BinarySearchTree(value);
      if (value >= newNode.value) {
        if (!newNode.right) newNode.right = newBinaryTree;
        else search(newNode.right);
      } else {
        if (!newNode.left) {
          newNode.left = newBinaryTree;
          return;
        }
        search(newNode.left);
      }
    };
    search(this);
  }
    
  contains(target) {
    let containsValue = false;
    if (target === this.value) return containsValue = true;
    const search = (newNode) => {
      if (target >= newNode.value) {
        const rightSide = newNode.right;
        if (rightSide === null) return;
        if (target === rightSide.value) return containsValue = true;
        search(rightSide);
      } 
      const leftSide = newNode.left;
      if (leftSide === null) return;
      if (target === leftSide.value) return containsValue = true;
      search(leftSide);
    };
    search(this);
    return containsValue;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    const traverse = (node) => {
      cb(node.value);
      if (node.right !== null && node.left !== null) {
        traverse(node.left);
        traverse(node.right);
      }
      if (node.right !== null && node.left === null) traverse(node.right);
      if (node.right === null && node.left !== null) traverse(node.left);
    };
    traverse(this);
  }

  // russell's code
  // depthFirstForEach(cb) {
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
    cb(this.value);
    const traverse = (arr, node) => {
      if (node.left !== null) arr.push(node.left);
      if (node.right !== null) arr.push(node.right);
    };
    const next = [];
    traverse(next, this);
    while (next.length !== 0) {
      const deletions = next.length;
      for (let j = 0; j < deletions; j++) cb(next[j].value);
      next.forEach((n) => {
        traverse(next, n);
      });
      for (let i = 0; i < deletions; i++) next.shift();
    }
  }

  // michael's code
  // insert(value) {
  //   const whichDir = (value < this.value) ? this.left : this.right; // is it left or right of origin node
  //   console.log(whichDir);
  //   const findVal = (direction) => {
  //     if (direction === null) { // if the next node is empty
  //       direction = new BinarySearchTree(value); // set its value
  //     } else { // if it's not empty
  //       const newDir = (value < direction.value) ? direction.left : direction.right;
  //       findVal(newDir);
  //     }
  //   };
  //   findVal(whichDir);
  // }
  // version 2
  // insert(value) {
  //   // const newNode = new BinarySearchTree(value);
  //   const whichDir = (value < this.value) ? 'left' : 'right'; // is it left or right of origin node
  //   const findVal = (direction) => {
  //     if (this.direction === null) { // if the next node is empty
  //       this.direction = new BinarySearchTree(value); // set its value
  //       return;
  //     }  // if it's not empty
  //     const newDir = (value < this.direction.value) ? 'left' : 'right';
  //     findVal(newDir);
  //   };
  //   findVal(whichDir);
  // }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively

  // sean's solution
//   const Queue = require('./queue-helper');
//   // Traverses the tree in a depth-first manner, i.e. from top to bottom
//   // Applies the given callback to each tree node in the process
//   depthFirstForEach(cb) {
//     cb(this.value);
//     if (this.left) {
//       this.left.depthFirstForEach(cb);
//     }
//     if (this.right) {
//       this.right.depthFirstForEach(cb);
//     }
//   }

//   // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
//   // at the root node, going down to the root node's children, and iterating
//   // through all those nodes first before moving on to the next layer of nodes
//   // Applies the given callback to each tree node in the process
//   // You'll need the queue-helper file for this. Or could you roll your own queue
//   // again. Whatever floats your boat.
//   breadthFirstForEach(cb) {
//     const queue = new Queue();
//     queue.enqueue(this);
//     while (!queue.isEmpty()) {
//       const node = queue.dequeue();
//       if (node.left) {
//         queue.enqueue(node.left);
//       }
//       if (node.right) {
//         queue.enqueue(node.right);
//       }
//       cb(node.value);
//     }
//   }
// }

}

module.exports = BinarySearchTree;
