// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */

// reading material https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/trees.html
/* key points
A BST is a binary tree where nodes are ordered in the following way:
each node contains one key (also known as data)
the keys in the left subtree are less then the key in its parent node, in short L < P;
the keys in the right subtree are greater the key in its parent node, in short P < R;
duplicate keys are not allowed.
*/

/* algorithm insertion pseudo code (taken from book data structures and algorithms with javascript)
“Set the root node to be the current node.
1. If the data value in the inserted node is less than the data value in the current node,
   set the new current node to be the left child of the current node.
2. If the data value in the inserted node is greater than the data value in the current node, skip to step 4.
3. If the value of the left child of the current node is null, insert the new node here and exit the loop.
   Otherwise, skip to the next iteration of the loop.
4. Set the current node to be the right child of the current node.
5. If the value of the right child of the current node is null, insert the new node here and exit the loop.
   Otherwise, skip to the next iteration of the loop.”
Excerpt From: Michael McMillan. “Data Structures and Algorithms with JavaScript.” iBooks.
https://github.com/oreillymedia/data_structures_and_algorithms_using_javascript/blob/master/Chapter10/Chap10-1.js
*/
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
    const node = new BinarySearchTree(value);// create the new node
  //  console.log(node);
    let current = this; // root node
    // console.log(current);
    let parent;
    while (true) { // keep looping over the tree until we find an empty tree that fits and call break
      // handle node value is less than current value
      parent = current;
      if (value < current.value) {
        current = current.left; // focus on left node
        if (current == null) { // node is empty, insert new node
          parent.left = node;
          break;
        }
      } else { // we focus on the right node for this iteration
        current = current.right; // move focus onto child right node
        if (current == null) {
          parent.right = node;
          break;
        }
      }
    }
  }
    /* solution insert answer
 instert(value) {
   if (value < this.value) {
     if (this.left ===null) {
       this.left = new BinarySearchTree(value);
     } else {
       this.left.insert(value);
     }
   }else {
     if (this.right === null) {
       this.right = new BinarySearchTree(value);
     } else {
       this.right.insert(value);
     }
   }
}
*/

  //  console.log(this);
  //  console.log(node);
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    console.log(this);
    if (this.value === target) return true;
    if (target < this.value) {
      if (this.left === null) return false;
      return this.left.contains(target); // recursively search the tree
    }
    if (this.right === null) return false;
    return this.right.contains(target);
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    console.log(this);
    cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb);
    if (this.right !== null) this.right.depthFirstForEach(cb);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    console.log(this);
    const queue = [];
    queue.push(this);
    for (let i = 0; i < queue.length; i++) {
      cb(queue[i].value);
      if (queue[i].left) queue.push(queue[i].left);
      if (queue[i].right) queue.push(queue[i].right);
    }
  }
}

module.exports = BinarySearchTree;

const Pat = new BinarySearchTree(10);
console.log('hi');
console.log(Pat);
Pat.insert(12);
console.log(Pat);
Pat.insert(9);
console.log(Pat);
Pat.insert(15);
console.log(Pat);
Pat.insert(8);
console.log(Pat);
// PatsTree.insert(10);
// PatsTree.insert(9);
// PatsTree.insert(144);
