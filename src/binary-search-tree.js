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
    if (this.value >= value ) {
      if (!this.left) this.left = new BinarySearchTree(value);
       else this.left.insert(value);
    }
    else if (this.value < value) {
      if (!this.right) this.right = new BinarySearchTree(value);
      else this.right.insert(value);
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.value === target) return true;
    if (this.value > target) {
      if (!this.left) return false;
      else return this.left.contains(target);
    }
    else if (this.value < target) {
      if (!this.right) return false;
      else return this.right.contains(target);
    }
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    if (this.value) cb(this.value);
    if (this.left) this.left.depthFirstForEach(cb);
    if (this.right) this.right.depthFirstForEach(cb);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
//     let queue = [this.value[0]];
//     while (queue.length > 0) {
//       let next = [];
//       for (let node of queue) {
//         cb(node);
//         if (node.left) next.push(node.left);
//         if (node.right) next.push(node.right);
//       }
//       queue = next;
//     }
//   }
// }
//    breadthFirstForEach(cb) {
//     let queue = [this.value];
//     while (queue.length > 0) {
//       cb(queue.shift());
//       if (!this.left && !this.right) {
//         continue;
//       }
//       for (let i = 0; i < this.left.length; i++) {
//         queue.push(this.value);
//       }
//       for (let i = 0; i < this.right.length; i++) {
//         queue.push(this.value);
//       }
//     }
//   }
// }

// breadthFirstForEach(cb) {
  // let queue = []; 
  // if (this.value != null) {
  //   queue.push(this.value);
  //   while (queue.length > 0) {
  //     let node = queue.shift();
  //     cb(node);
  //     if (node.left != null) {
  //       queue.push(node.left);
  //     };
  //     if (node.right != null) {
  //       queue.push(node.right);
  //     };
  //     };
  //   };
  // }
  // breadthFirstForEach(cb) {
    let queue = new Queue;
    queue.enqueue(this);
    while (!queue.isEmpty()) {
      const temp = queue.dequeue();
      if (temp.left !== null) queue.enqueue(temp.left);
      if (temp.right !== null) queue.enqueue(temp.right);
      cb(temp.value);
    }
  }
}
// this.left.forEach(queue.push(this.left));
module.exports = BinarySearchTree;
