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
    let flag = false;
    if (this.value === value) {
      flag = true;
      return flag;
    }
    for (let i = 0; i < this.children.length; i++) {
      const inside = this.children[i];
      flag = this.contains.call(inside, value);
      if (flag) return flag;
    }
    return flag;
  }
}

module.exports = Tree;
