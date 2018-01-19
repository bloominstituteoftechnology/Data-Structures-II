// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable */
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
    // insert needs to instantiate a new node
    const newNode = new BinarySearchTree(value);
    // insert needs to check if the root node is equal
    // or less than the value passed into it.  It also
    // needs to check if the node is not already there.
    if (value <= this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
      // now it inserts the value to the left
        this.left.insert(value);
      }
    } else {
    // or since it was not less than or equal to the inital
    // node then it has to insert it to the right.
    // but first it needs to check if the node is not 
    // there again
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    // contains needs to check if the initial node is equal
    // to the target.
    if (this.value === target) {
      return true;
    }
    // then it checks to see if there is a node to the left
    if (this.left) {
    // and then recursively calls the contains function for
    // each value to the left to see if that value is equal
    // to the target
      if (this.left.contains(target)) return true;
    } 
    if (this.right) {
    // and then recursively calls to the right. 
      if (this.right.contains(target)) return true;
    }
    return false;
  }
  // below was my attempt but it didn't seem to work.
  //   let findsTarget = false;
  //   if (target === this.value) return findsTarget = true;
  //   if (target < this.value) {
  //     const search = (left) => {
  //       left.forEach((leftValue) => {
  //         if (target === this.value) return findsTarget = true;
  //         if (target < left.value) {
  //           search(leftValue.left);
  //         }
  //       });
  //     };
  //     search(this.right);
  //     return findsTarget;
  //   }
  //   if (target > this.value) {
  //     const search = (right) => {
  //       right.forEach((rightValue) => {
  //         if (target === this.value) return findsTarget = true;
  //         if (target < right.value) {
  //           search(rightValue.right);
  //         }
  //       });
  //     };
  //     search(this.right);
  //     return findsTarget;
  //   }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
  // depth first needs to pass the first node through the calallback
  // function.
     cb(this.value);
     // then we need to check if there is a node to the left and
     // run it through the callback function
     if (this.left) {
      this.left.depthFirstForEach(cb);
    }
     if (this.right) {
      this.right.depthFirstForEach(cb);
     }
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    //we first have to pass the root node through the callback
    // cb(this.value);
    //then we need to 
    const queue = new Queue();
    queue.enqueue(this);
    while(!queue.isEmpty()) {
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
