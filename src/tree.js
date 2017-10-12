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
    let found = false;
    if (this.children.length === 0) return false;
    // iterate array
    this.children.forEach((child) => {
      if (child.value === value) {
        found = true;
      } else {
        const result = child.contains(value);
        if (result === true) {
          found = true;
        }
      }
    });
    return found;
    // for each child check value, iterate through its childen
  }
}

module.exports = Tree;
