/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    const child = new Tree(value);
    child.value = value;
    this.children.push(child);
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    const stack = [this];
    let n;
    while (stack.length > 0) {
      n = stack.pop();
      if (n.value === value) return true;

      for (let i = n.children.length -1; i >= 0; i--) {
        stack.push(n.children.length[i]);
      }
    }
    return false;
  }
}

module.exports = Tree;
