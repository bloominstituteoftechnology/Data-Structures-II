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
    let found = false;
    if (this.value === value) return true;
    // iterate over children to see if they have a value.
    const childrenHave = this.children.find(child => child.contains(value) !== false);

    if (childrenHave !== undefined) found = true;

    return found;
  }
}

module.exports = Tree;
