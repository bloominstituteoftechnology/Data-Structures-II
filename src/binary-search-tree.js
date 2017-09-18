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
    const newTree = new BinarySearchTree(value);
    function add(node) {
      // if the value of the tree is greater than the new data
      // and if there is nothing in the left node
      // add the newTree to the left node
      if (node.value > value && node.left === null) {
        node.left = newTree;
        // if tree value is greater than node, the node will be the left node
      } else if (node.value > value) {
        add(node.left);
      } else if (node.value < value && node.right === null) {
        node.right = newTree;
      } else if (node.value < value) {
        add(node.right);
      }
    }
    // start checking for the value
    add(this);
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    let doesContain = false;
    function find(node) {
      if (node.value === target) {
        doesContain = true;
        return doesContain;
      } else if (node.left !== null && target < node.value) {
        find(node.left);
      } else if (node.right !== null && target > node.value) {
        find(node.right);
      }
    }
    find(this);
    return doesContain;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    function recurse(node) {
      cb.call(node, node.value);
      if (node.left !== null) {
        recurse(node.left);
      }
      if (node.right !== null) {
        recurse(node.right);
      }
    }
    recurse(this);
  }
  
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  /* eslint-disable global-require */
  breadthFirstForEach(cb) {
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
    const queue = new Queue();
    // Add the node that invoked traverseBF(callback) to the instance of Queue.
    queue.enqueue(this.root);
    // Declare a variable named currentNode and initialize it to the node
    // that we just added to our queue.
    let currentTree = queue.dequeue();
    // While currentNode points to a node, execute the code inside the while loop.
    // until currentNode does not point to a node (does not have an children)
    while (currentTree) {
      // Use a for loop to iterate on the children of currentNode.
      for (let i = 0; i < currentTree.children.length; i++) {
        // Inside the body of the for loop, add every child to the queue
        queue.enqueue(currentTree.children[i]);
      }
      // Take currentNode and pass it as an argument of callback (console.log(node.data))
      cb(currentTree);
      // Reassign currentNode to the node being removed from the queue.
      currentTree = queue.dequeue();
    }
  }
}
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

module.exports = BinarySearchTree;
