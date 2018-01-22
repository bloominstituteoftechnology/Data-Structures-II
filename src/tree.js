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
    this.children.push(new Tree(value));
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    let containsValue = false; // initialize flag because we'll assume we haven't found the value
    if (this.value === value) return containsValue = true; // if value we're currently on matches what we're lookng for return true
    const search = (children) => { // recursive function. receives an array of the children
      children.forEach((child) => { // iterate over each child
        if (value === child.value) return containsValue = true; // if value matches, return true
        if (child.children.length) { // checks length of children array of current child to see if there is any children left  
          search(child.children); // if there are children, run search function on these children
        }
      });
    };
    search(this.children);
    return containsValue;
  }
}

module.exports = Tree;
