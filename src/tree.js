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
    this.children[this.children.length] = child;
    // return child to allow chaining!
    return child;
  }

  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    let result = false;
    if (this.value === value) return true;

    const recurse = (children) => {
      children.forEach((child) => {
        if (child.value === value) result = true;
        if (child.children.length > 0) {
          recurse(child.children);
        }
      });
    };

    recurse(this.children);
    return result;
  }
}

module.exports = Tree;
