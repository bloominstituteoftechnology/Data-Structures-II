/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    if (this.children.length === 0 && this.value !== value) {
      return false;
    } 
    if (this.value === value) {
      return true;
    }
    let s = false;
    this.children.forEach((i) => {
      if (i.contains(value)) {
        s = true;
      }
    });
    return s;
  }
}

module.exports = Tree;
