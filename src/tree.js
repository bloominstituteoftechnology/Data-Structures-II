/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    const newValue = new Tree(value);
    return this.children.push(newValue);
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    const checker = value;
    let found = false;
    const loopFunc = (x) => {
      if (checker === x.value) {
        found = true;
      }
      for (let k = 0; k < x.children.length; k++) {
        if (found) break;
        loopFunc(x.children[k]);
      }
    };
    loopFunc(this);
    return found;
  }
}

module.exports = Tree;
