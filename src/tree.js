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
    const searchTree = (node) => {
      // if there are no more children, just return the node value === target value
      if (node.children[0].children === undefined) return node.value === value;      
      // if the node has more than one child
      // Array.slice returns an Array so just take the [0] index
      if (node.children.length > 1) return searchTree(node.children[0]) || searchTree(node.children.slice(1)[0]);
      // else the node only has one node
      const child = node.children[0];
      // if node has no children
      if (child.children.length === 0) return child.value === value;
      // else the node has children (nested)
      return searchTree(child.children);
    };
    return searchTree(this);
  }
}

module.exports = Tree;
