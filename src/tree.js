/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
 // Adds a new Tree node with the input value to the current Tree node  
  addChild(value) {
    const myTree = new Tree(value);
    this.children.push(myTree);
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    
  }

}

module.exports = Tree;
