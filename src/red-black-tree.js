/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */

const BinarySearchTree = require('./binary-search-tree');

class RedBlackTree extends BinarySearchTree {
  constructor(color = 'black') {
    super();
    this.color = color;
    this.isNullLeaf = false;
    this.left = new BinarySearchTree(null, this);
    this.right = new BinarySearchTree(null, this);
    this.left.isNullLeaf = true;
    this.right.isNullLeaf = true;
  }

  insert(value, color) {
    const newNode = super.insert(value);
    if (newNode.color !== 'red' && newNode.color !== 'black') {
      throw new Error('Color must be either red or black');
    }
    if (newNode.color === 'red' && newNode.parent.color === 'red') {
      super.remove(newNode);
      throw new Error('Red node must have black children');
    }
    newNode.color = color;
    newNode.left = new BinarySearchTree(null, this);
    newNode.right = new BinarySearchTree(null, this);
    return newNode;    
  }
  
  remove(node) {
    return super.remove(node);
  }

  contains(target) {
    return super.contains(target);
  }

  depthFirstForEach(cb) {
    super.depthFirstForEach(cb);
  }

  breadthFirstForEach(cb) {
    super.breadthFirstForEach(cb);
  }
}

module.exports(RedBlackTree);
