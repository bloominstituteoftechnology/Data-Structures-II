/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
// const flag = false;

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.flag = false;
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    const newNode = new Tree(value);
    this.children.push(newNode);
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

const test = new Tree(true);

// console.log(typeof test.addChild);
// console.log(typeof test.contains);

test.addChild(5);
// console.log(test.children[0].value);
// console.log(test.children);

// console.log(test.contains(5));

// console.log(test.contains(6));

// test.children[0].addChild(6);
// console.log(test.children[0].children[0].value);

test.addChild(6);
test.children[0].addChild(7);
test.children[1].addChild(8);
// console.log(test.children[0].children);
// console.log(test.children[1].children);
// console.log(test.contains(7));
// console.log(test.contains(9));
console.log(test.contains(7));
console.log(test.contains(8));

module.exports = Tree;
