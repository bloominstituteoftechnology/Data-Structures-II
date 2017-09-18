/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    const childNode = new Tree(value);
    this.children.push(childNode);
  }

  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value, node) {
    node = node || this;

    if (node.value === value) return true;

    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        if (this.contains(value, node.children[i])) {
          return true;
        }
      }
    }
    return false;
  }
}

module.exports = Tree;
