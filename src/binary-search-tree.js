// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// const Queue = require('./queue-helper');

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
    const newBst = new BinarySearchTree(value);

    // check to see if target value is less than nodes value
    if (value < this.value) {
      // if there isnt an a left child, add the child
      if (this.left === null) {
        this.left = newBst;
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = newBst;
      } else {
        this.right.insert(value);
      }
    }

    // let inserted = false;

    // while (!inserted) {
    //   if (value < current.value) {
    //     // if left child is null, set newBst to left child
    //     if (current.left === null) {
    //       current.left = newBst;
    //       inserted = true;
    //     }
    //     current = current.left;
    //   } else if (value > current.value) {
    //     if (current.right === null) {
    //       current.right = newBst;
    //       inserted = true;
    //     }
    //     current = current.right;
    //   } else { // if target value equals currents value, which is a no no
    //     break;
    //   }
    // }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    let found = false;
    let current = this;

    while (!found && current) {
      if (target < current.value) {
        current = current.left;
      } else if (target > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    // cb(this.value);
    // if (this.left) {
    //   this.left.depthFirstForEach(cb);
    // }
    // if (this.right) {
    //   this.rigiht.depthFirstForEach(cb);
    // }
    const inOrder = (bst) => {
      cb.call(bst, bst.value);
      // if no left child,then go right
      if (bst.left !== null) {
        inOrder(bst.left);
      }

      if (bst.right !== null) {
        inOrder(bst.right);
      }
    };
    inOrder(this);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  /* eslint-disable global-require */
  breadthFirstForEach(cb) {
    const queue = new Queue();
    queue.enqueue(this);
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      if (node.left) {
        queue.enqueue(node.left);
      }
      if (node.right) {
        queue.enqueue(node.right);
      }
      cb(node.value);
    }
  }
}

module.exports = BinarySearchTree;
