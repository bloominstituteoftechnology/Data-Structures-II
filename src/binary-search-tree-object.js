// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars, no-console */
/* eslint-disable no-trailing-spaces, import/no-extraneous-dependencies */
const Stack = require('./storage/stack');
const Queue = require('./storage/queue');

// const maxIterate = 10;
let countIterate;
let icb;
/* eslint-disable no-console */
class BinarySearchTreeObject {
  constructor(obj = null) {
    this.left = null;
    this.right = null;
    this.obj = obj;
  }

  get value() {
    // console.log('this.obj:', this.obj);
    // console.log('this.obj.value:', this.obj.value);
    return this.obj.value;
  }

  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  insert(data) {
    // console.log('>>>>>insert value:', data.value);
    if (this.obj === null) {
      this.obj = data;
      return;
    }
    const tree = new BinarySearchTreeObject(data);
    if (data.value < this.value) {
      if (this.left === null) {
        this.left = tree;
      } else {
        return this.left.insertTree(tree);
      }
    } else if (this.right === null) {
      this.right = tree;
    } else {
      return this.right.insertTree(tree);
    }
  }
  insertTree(tree) {
    const value = tree.value;
    if (value < this.value) {
      if (this.left === null) {
        this.left = tree;
      } else {
        return this.left.insertTree(tree);
      }
    } else if (this.right === null) {
      this.right = tree;
    } else {
      return this.right.insertTree(tree);
    }
  }

  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (target === this.value) {
      return true;
    }
    if (this.left !== null) {
      if (target <= this.left.value) {
        return this.left.contains(target);
      }
    }
    if (this.right !== null) {
      if (target >= this.right.value) {
        return this.right.contains(target);
      }
    }
    return false;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  /*
  stack.push(root)
while !stack.isEmpty() do
    node = stack.pop()
    for each node.childNodes do
        stack.push(stack)
    endfor
    // …
endwhile
*/

  dfsIterate(tree) {
    // console.log('iterate tree.value:', tree.value)
    // icb(tree.value)
    let t = [tree];
    if (tree.left != null) {
      t = t.concat(this.dfsIterate(tree.left));
    }
    if (tree.right != null) {
      t = t.concat(this.dfsIterate(tree.right));
    }
    return t;
  }

  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left != null) {
      this.dfsIterate(this.left).forEach(t => cb(t.value));
    }
    if (this.right != null) {
      this.dfsIterate(this.right).forEach(t => cb(t.value));
    }
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.

  bfsIterate(q, cv) {
    // console.log('iterate tree.value:', tree.value)
    // icb(tree.value)

    //  using parents q cv level saving nodes in child q
    //  parents q = child q

    const childQ = new Queue();
    while (!q.isEmpty) {
      const parent = q.dequeue();
      if (parent.left != null) {
        childQ.enqueue(parent.left);
        cv(parent.left.value);
      }
      if (parent.right != null) {
        childQ.enqueue(parent.right);
        cv(parent.right.value);
      }
    }
    if (!childQ.isEmpty) {
      this.bfsIterate(childQ, cv);
    }
    return null;
  }

  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const q = new Queue();
    q.enqueue(this);
    cb(this.value);
    this.bfsIterate(q, cb);
  }
}
module.exports = BinarySearchTreeObject;
