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
  contains(value, matches = false) {
    if (this.value === value) {
      matches = true;
    }
    this.children.forEach((node) => {
      matches = node.contains(value, matches);
    });
    return matches;
  }
}

const t1 = new Tree(30);
t1.addChild(3);
t1.addChild(5);
t1.addChild(6);
t1.addChild(4);

t1.contains(3);

module.exports = Tree;
