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
    // check that node
    let containsValue = false;
    if (this.value === value) return containsValue = true;
    // check if that node has any children
    const search = (nextChildren) => {
      nextChildren.forEach((child) => {
        if (child.value === value) return containsValue = true;
        if (child.children.length) search(child.children);
      });
    };
    search(this.children);
    return containsValue;
    // if so, check those nodes
  }
}

module.exports = Tree;
