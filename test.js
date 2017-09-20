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
    let current = this;
    const newBst = new BinarySearchTree(value);

    // if empty bst
    if (current === null) {
      current = newBst;
    }

    let inserted = false;

    while (!inserted) {
      if (value < current.value) {
        // if left child is null, set newBst to left child
        if (current.left === null) {
          current.left = newBst;
          inserted = true;
          // break;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newBst;
          inserted = true;
          // break;
        }
        current = current.right;
      } else { // if target value equals currents value, which is a no no
        break;
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    let current = this;
    let found = false;

    //make sure there's a node to search
    while(!found && current){

        //if the value is less than the current node's, go left
        if (target < current.value){
          current = current.left;

        //if the value is greater than the current node's, go right
      } else if (target > current.value){
        current = current.right;

        //values are equal, found it!
      } else {
        found = true;
      }
    }
    return found;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {

  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  /* eslint-disable global-require */
  breadthFirstForEach(cb) {

  }
}

binarySearchTree = new BinarySearchTree(5);
binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.insert(7);

console.log(binarySearchTree.contains(7));
console.log(binarySearchTree.contains(8));


