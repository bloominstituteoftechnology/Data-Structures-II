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
    const hasChildren = [];
    let isFound = false;
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].value === value) {
        isFound = true;
        return isFound;
      } else if (this.children[i].children !== []) {
        hasChildren.push(this.children[i].children);
      }
    }
    if (hasChildren) {
      for (let i = 0; i < hasChildren.length; i++) {
        for (let j = 0; j < hasChildren[i].length; j++) {
          if (hasChildren[i][0].value === value) {
            isFound = true;
            return isFound;
          }
        }
      }
    }
    isFound = false;
    return isFound;
  }
}


// const tree = new Tree();
// tree.addChild(5);
// tree.addChild(6);
// tree.addChild(7);
// tree.addChild(8);
// tree.addChild(9);
// tree.children[0].addChild(10);
// tree.children[1].addChild(11);
// tree.children[2].addChild(12);

// console.log(tree.children);
// console.log(tree.contains(0));
// console.log(tree.children[0]);
module.exports = Tree;
