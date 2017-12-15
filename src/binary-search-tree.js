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
    if (value > this.value) {
      if (this.right === null) {
        this.right = newNode;
        return;
      } 
      if (this.right !== null) this.right.insert(value);
    } else if (value < this.value) {
      if (this.left === null) {
        this.left = newNode;
        return;
      } 
      if (this.left !== null) this.left.insert(value);
    } else if (value === this.value && this.right === null) {
      if (this.right === null) {
        this.right = newNode;
        return;
      } 
      if (this.right !== null) this.right.insert(value);
    } 
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.value === target || this.left.value === target || this.right.value === target) return true;
    while (this.left !== null) {
      if (this.left.value === target) return true;
      if (this.left.left && this.left.contains(target)) return true;
      return false;
    }
    while (this.right !== null) {
      if (this.right.value === target) return true;
      if (this.right.right && this.right.contains(target)) return true;
      return false;
    }
    return false;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    function recurse(tree) {
      cb(tree.value);
      if (tree.left !== null) recurse(tree.left);
      if (tree.right !== null) recurse(tree.right);
    }
    recurse(this);
  }
  // // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // // at the root node, going down to the root node's children, and iterating
  // // through all those nodes first before moving on to the next layer of nodes
  // // Applies the given callback to each tree node in the process
  // // You'll need the queue-helper file for this. Or could you roll your own queue
  // // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const cbArr = [this];
    if (this.left !== null) cbArr.push(this.left);
    if (this.right !== null) cbArr.push(this.right);
    for (let i = 1; i < cbArr.length; i++) {
      if (cbArr[i].left !== null) cbArr.push(cbArr[i].left);
      if (cbArr[i].right !== null) cbArr.push(cbArr[i].right);
    }
    while (cbArr.length > 0) {
      cb(cbArr.shift().value);
    }
  }
}

const test = new BinarySearchTree(5);

// console.log(typeof test.insert);
// console.log(typeof test.contains);
// console.log(typeof test.depthFirstForEach);
// console.log(typeof test.breadthFirstForEach);

// test.insert(2);
// test.insert(3);
// test.insert(7);
// test.insert(6);
// console.log(test.left.right.value);
// console.log(test.right.left.value);

// test.insert(2);
// test.insert(3);
// test.insert(7);
// console.log(test.contains(7));
// console.log(test.contains(8));

const array = [];
const foo = value => ((array.push(value)));
// test.insert(2);
// test.insert(3);
// test.insert(7);
// test.insert(9);
// test.depthFirstForEach(foo);
// console.log(array);

test.insert(3);
test.insert(4);
test.insert(10);
test.insert(9);
test.insert(11);
test.breadthFirstForEach(foo);
console.log(array);

module.exports = BinarySearchTree;
