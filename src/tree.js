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
  contains(value) {
    let doesContain = false;
    this.children.forEach((child) => {
      // for every child, if the value is the same as the passed in
      if (child.value === value) {
        doesContain = true;
      }
      // if that node's value isn't the same as the one passed in
      // check if that child contains that value
      if (child.contains(value)) {
        doesContain = true;
      }
    });
    return doesContain;
  }
}

module.exports = Tree;
