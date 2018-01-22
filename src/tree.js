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
    // create new tree and push it in this class tree's chidren array
    const newTree = new Tree(value);
    this.children.push(newTree);
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {

    let found = false;
    if(value = this.value) return found = true;
    const recursiveSearch = (children) => {
      children.forEach((child) => {
        if(child.value = value) return found = true;
        if(child.children.length > 0){
          recursiveSearch(child.children);
        }
      });
    }
    recursiveSearch(this.children);
    return found;
  }
}

module.exports = Tree;
