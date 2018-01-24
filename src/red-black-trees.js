/* eslint-disable */
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
    this.left = new BinarySearchTree(null, this); // creates NullLeaves on left 
    this.right = new BinarySearchTree(null, this); // creates NullLeaves on right
    this.left.color = 'black';
		this.right.color = 'black';
    this.left.isNullLeaf = true;
    this.right.isNullLeaf = true;
  }

  insert(value, color) {
    const newNode = super.insert(value);
    if (newNode.color !== 'red' && newNode.color !== 'black') {
      super.remove(newNode); // remove invalid nodes
			throw new Error('Color must be either red or black');
    }
    if (newNode.color === 'red' && newNode.parent.color === 'red') {
      super.remove(newNode); // remove invalid nodes
      throw new Error('Red node must have black children');
    }
    newNode.color = color; // sets the color of the newNode
    newNode.left = new BinarySearchTree(null, this); // creates the NullLeaves on left
    newNode.right = new BinarySearchTree(null, this); // creates the NullLeaves on right
    return newNode;  // returns the newNode  
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
