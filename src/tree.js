/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value, target = null) {
    const node = new Tree(value);
    if (target || target === 0) {
      this.children.forEach((child) => {
        child.children.push(value);
      });
      return;
    } 
    this.children.push(node);
  }
 
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
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

const newTree = new Tree();
// console.log(newTree);
// newTree.addChild('2');
// newTree.addChild('3', '2');
// console.log(newTree);

module.exports = Tree;
