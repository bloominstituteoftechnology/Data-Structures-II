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
    let doesContain = false;
    if (this.value === value) {
      doesContain = true;
      return doesContain;
    }
    for (let i = 0; i < this.children.length; i++) {
      // if (this.children[i].value === value) {
      //   doesContain = true;
      //   return doesContain;
      // }
      const a = this.children[i];
      doesContain = this.contains.call(a, value);
      if (doesContain) return doesContain;
    }
    return doesContain;
  }
}

module.exports = Tree;
