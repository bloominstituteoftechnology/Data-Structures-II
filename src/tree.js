/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable */
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
    let containsValue = false;
    if (value === this.value) return true;
    const childSearch = (children) => {
      children.forEach((child) => {
        if (child.value === value) return containsValue = true;
        if (child.children.length) childSearch(child.children);
      });
    };
    childSearch(this.children);
    return containsValue;
  }
}

module.exports = Tree;
