/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    const child = new Tree(value);
    this.children.push(child);
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    if (this.value === value) return true;
    if (this.children.length === 0) return this.value === value;
    let flag = false;
    this.children.forEach((child) => {
      if (child.contains(value)) flag = true; 
    });
    return flag;
  }
}

module.exports = Tree;
