// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// Binary tree is like a phone book
// open up to middle of phone & search from there, L's and on
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
    const newNode = new BinarySearchTree(value); // haven't assigned where node lives, but still there
    // console.log(newNode);
    if (value < this.value) { // points to root 
      // move to left
      if (!this.left) { // if nothing is there, can go ahead and assign it
        this.left = newNode;
      } else {
        this.left.insert(value); // take value and run logic again 
        // recursive because of this line. It calls itself
      }
    } else if (value > this.value) {
      // move to the right
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  } // solution from Ryan's lecture 

  /* solution from Ivan's lecture
insert(value) {
  if(value < this.value) {
    if(this.left === null ){
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null){
      this.right = new BinarySearchTree(value); //doesn't affect performance to have this line twice b/c they don't run at same time
      } else {
        this.right.insert(value);
    }
  }
}
  */
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
 /* contains(target) {
    let found = false;
    const search = (node) => {
      if (target === node.value) found = true;
      else if (target < node.value && node.left) search(node.left);
      else if (target > node.value && node.right) search(node.right);
    }; search(this);
    return found;
  } */
  contains(target) {
    if (this.value === target) return true;
    if (target < this.value) {
      if (this.left == null) return false;
      return this.left.contains(target);
    } // else {} 
    if (this.right === null) return false;
    return this.right.contains(target);
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  /* depthFirstForEach(cb) {
    const result = [];
    const search = (node) => {
      result.push(node.value);
      if (node.left) search(node.left);
      if (node.right) search(node.right);
    }; 
    search(this);
    result.forEach(x => cb(x));
  } */
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left !== null) this.left.breadthFirstForEach(cb);
    if (this.right !== null) this.right.depthFirstForEach(cb);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  /* breadthFirstForEach(cb) {
    const result = [];
    const temp = [];
    if (this !== null) temp.push(this);
    while (temp.length > 0) {
      const node = temp.shift();
      result.push(node.value);
      if (node.left !== null) temp.push(node.left);
      if (node.right !== null) temp.push(node.right);
    }
    result.forEach(x => cb(x));
  }
} */
// if want to include const Queue = require('./queue-helper');  
  breadthFirstForEach(cb) {
    const queue = [];
    queue.push(this);
    for (let i = 0; i < queue.length; i++) {
      cb(queue[i].value);
      if (queue[i].left) queue.push(queue[i].left);
      if (queue[i].right) queue.push(queue[i].right);
    }
  }
}
/* with enqueue
const queue = new Queue;
queue.enqueue(this);
while (!queue.isEmpty()) {
  const current = queue.dequeue();
  cb(current.value);
  if (current.left) queue.enqueue(current.left);
  if (current.right) queue.enqueue(current.right);
}
}
}


/* const myTree = new BinarySearchTree(5);
console.log(myTree.insert(4)); */  

module.exports = BinarySearchTree;
