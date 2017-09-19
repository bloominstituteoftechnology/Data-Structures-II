/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    const newTreeNode = new Tree(value);
    this.children.push(newTreeNode);
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    if (this.value === value) {
      return true;
    }
    if (this.children.length < 0) {
      return false;
    }
    let flag = false;
    const checkChildren = (valueToFind, childrenTree) => {
      if (childrenTree === undefined) {
        return;
      }
      if (childrenTree.length < 1) {
        return;
      }
      if (childrenTree.length > 0) {
        for (let i = 0; i < childrenTree.length; i++) {
          if (childrenTree[i].value === valueToFind) {
            flag = true;
            break;
          }
          if (childrenTree[i].children.length > 0) {
            checkChildren(valueToFind, childrenTree[i].children);
          }
        }
      }
      return flag;
    };
    return checkChildren(value, this.children);
  }
}

module.exports = Tree;
