/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    this.children.push(new Tree(value));
  }

  contains(value) {
    if (this.value === value) return true;
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      if (child.value === value) return true;
      if (child.children[0] && child.contains(value)) return true;
    }
    return false;
  }
}

module.exports = Tree;
