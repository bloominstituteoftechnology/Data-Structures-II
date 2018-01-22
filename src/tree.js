/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    const tree = new Tree(value);  // Creates child node
    this.children.push(tree);  // Adds the child node to the children array of the root node
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    let containsValue = false; // flag variable to keep track of whether or not value was found
    if (this.value === value) return containsValue = true; // checks root node for the value
    // recursive function to check each child node
    const search = (children) => {
      // perform the anonymous function on each child in children array of node it is currently searching
      children.forEach((child) => {
        if (value === child.value) return containsValue = true; // checks child value vs searched value
        if (child.children.length) search(child.children); // check child node's children if it exists
      });
    };
    search(this.children); // recursive function call on root object's children
    return containsValue; // return true/false 
  }
}

module.exports = Tree;
