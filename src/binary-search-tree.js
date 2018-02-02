// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
const Queue = require('./queue-helper.js');
console.log(Queue);

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
    // if (newBST < value...go left)
    // else go right
    const child = new BinarySearchTree(value);  // create a child node and set it to BST(value) in order to inherit properties
    if(child.value < this.value) {  // check which way i need to start traversing the tree. if child's value < than current node value, go left
      if(this.left === null) {  // must check that there is something at this.left
        this.left = child;  // if there isn't, set this.left to be child (would have a value now)
      } else {
        this.left.insert(value);  // otherwise call insert on this.left (recursively checking again which way to go)
      }
    }
    if(child.value > this.value) {  // if child is greater, check that this.right has a value, then do the same thing.
      if(this.right === null) {
        this.right = child;
      } else {
        this.right.insert(value);
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    // if value = target, done
    // if target < value, this.left.contains(value)
    // if target > value, this.right.contains(value)
    if(target === this.value) {  // if what you're looking for is that value you're done
      return true;
    }
    if(target < this.value) {  // if less, go left, check that there's something there, then run contains on that to check again
      if(this.left !== null) {
        return this.left.contains(target);
      }
    }
    if(target > this.value) {  // if more, go right, check that there's something there, then run contains on that to check again
      if(this.right !== null) {
      return this.right.contains(target);
      }
    }
    return false;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {  // traverses deeply down each branch
    // 5,2,3,7,9
    // if left, cb(this.left(this.value))
    cb(this.value);  // first run the callback on the current value
    if(this.left !== null) {  // check that this.left exists, then call depthFirstForEach on this.left with the cb. it will run the cb on whatever is in there
      this.left.depthFirstForEach(cb);
    }
    if(this.right !== null) {
      this.right.depthFirstForEach(cb);  // same things, but if you went right.
    }
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {  // traverse by levels
    // make queue, do some stuff, shift out, next layer
    //      5
  //     2     7
  //        3    9
  //    [5 2 7 3 9]
  // enqueue root,
  // check queue !== null
    // enqueue children (this.right, this.left)
    //dequeue first element, call cb(element)
  // while queue !== null (2,7) check this.left && this.right for enqueue
    // enqueue (this.right (3))
    // dequeue 2, callback(2)
  // queue (7,3)
    // enqueue (this.right (9))
    // dequeue 7 callback(7)
  // queue (3,9)
    // check --> dequeue 3, callback(3)
    // check --> dequeue 9, callback (9)
    const queue = new Queue();  // need a queue in order to store and pop off levels as i go
    queue.enqueue(this);  // enqueue the entire tree.
    while(!queue.isEmpty()) {  // while the queue isn't empty...
      const node = queue.dequeue();  // set a node to be the queue without anything in there. I want a reference to the tree.
      if(node.left) {  // if i'm going left
        queue.enqueue(node.left);  // enqueue node.left
      }
      if(node.right) {
        queue.enqueue(node.right);  // if i went right, enqueue node.right
      }
      cb(node.value);  // run the callback on the value
    }
  }
}

module.exports = BinarySearchTree;
