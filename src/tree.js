/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
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
    if (this.value === value) {
      return true;
    }
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(value)) {
        return true;
      }
    }
    return false;
  }
}

// Example 
// tree = new Tree(1);
// 1
// tree.addChild(2);
//  1
//  |
//  2
// tree.addChild(3)
//  1
//  | 
//  2 -- 3
// tree.children[0].addChild(4)
// 1
// |
// 2--3
// |
// 4
module.exports = Tree;
