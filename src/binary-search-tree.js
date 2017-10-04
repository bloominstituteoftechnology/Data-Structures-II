// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces, import/no-extraneous-dependencies */
import { Stack } from './storage/stack'
import { Queue } from './storage/queue'

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
    const tree = new BinarySearchTree(value)
    if (value < this.value) {
      if (this.left === null) {
        this.left = tree
      } else {
        return this.left.insert(value)
      }
    } else
      if (this.right === null) {
        this.right = tree
      } else {
        return this.right.insert(value)
      }
  }


  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (target === this.value) {
      return true
    }
    if (this.left !== null) {
      if (target <= this.left.value) {
        return this.left.contains(target)
      }
    }
    if (this.right !== null) {
      if (target >= this.right.value) {
        return this.right.contains(target)
      }
    }
    return false
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
  iterate(tree) {
    const t = [tree]
    if (tree.right != null) {
      t.concat(this.iterate(tree.right))
    }    
    if (tree.right != null) {
      t.concat(this.iterate(tree.right))
    }
    return t
  }
  depthFirstForEach(cb) {
    const storage = new Stack()
    storage.push(this)
    while (!storage.isEmpty()) {
      const node = storage.pop()
      cb(node)
      if (this.left != null) {
        this.iterate(this.left).forEach(t => storage.push(t))
      }
      if (this.right != null) {
        this.iterate(this.right).forEach(t => storage.push(t))
      }
    }
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {

  }
}

module.exports = BinarySearchTree;
