/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    this.children.push(new Tree(value));   // ({ value: value });
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    let flag = false;
    // console.log(this.children)
    this.children.forEach((child) => { // Running bellow code for each element in the array 
      if (child.value === value) flag = true;
      if (child.contains(value)) flag = true;
    });
    return flag;
  }
}

module.exports = Tree;

// let t = new Tree('Moises');
// t.addChild(10);
// t.addChild(20);
// console.log(t);
// t.children[0].addChild(30);
// console.log(t);
// t.children[0].children[0].addChild(50);
// // console.log(t.children[0])
// // console.log(t.children);
// console.log(t.contains(50));
