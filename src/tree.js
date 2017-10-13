/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */

//new note lorin 10/13
class Tree { 
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    const node = new Tree(value);
    this.children.push(node);
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    if (this.value === value) return true;
    let containsValue = false;
    const searchTree = (treeNode) => {
      for (let i = 0; i < treeNode.children.length; i++) {
        if (treeNode.children[i].value === value) containsValue = true;
        if (treeNode.children[i].children.length > 0) searchTree(treeNode.children[i]);
      }  
    };
    searchTree(this);
    return containsValue;
  }
}

module.exports = Tree;
