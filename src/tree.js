/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
  }

  contains(value) {
    if (this.value === value) return true;
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(value)) return true;
    }
    return false;
  }
}

module.exports = Tree;
