/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
<<<<<<< HEAD
=======

>>>>>>> 3fc14963ad2f5b58490ef51fc984f4f5c35a2535
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
<<<<<<< HEAD
    this.children.push(new Tree(value));
=======
    // this.children[0].addChild(value);
    // this.addChild({ id: 1, name: 'Node 1' });
    // this.children.push((value));
    this.children.push(new Tree(value)); // duh
>>>>>>> 3fc14963ad2f5b58490ef51fc984f4f5c35a2535
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    if (this.value === value) {
      return true;
    }
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(value)) {
        return true;
      }
    }
    return false;
  }
}


module.exports = Tree;
