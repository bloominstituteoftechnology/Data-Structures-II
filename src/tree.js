/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    this.children.push(new Tree(value));
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    let hasValue = false;
    if (this.value === value) return hasValue = true;
    const searchThroughChildren = (children) => {
      children.forEach((child) => {
        if (child.value === value) return hasValue = true;
        if (child.children.length) {
          searchThroughChildren(child.children);
        }
      });
    };
    searchThroughChildren(this.children);
    return hasValue;
  }
}

module.exports = Tree;
