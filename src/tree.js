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
  //   const search = () => {
  //     if (this.value === value) {
  //       return true;
  //     } else if (this.left !== null && value < this.children.value) {
  //       search(this.left);
  //     } else if (this.right !== null && value > this.children.value) {
  //       search(this.right);
  //     } else {
  //       return false;
  //     }
  //   };
  //   return search(value);
  // }
    let result = false;
    const search = (node) => {
      node.children.forEach((element) => {
        if (element.value === value) result = true;
        if (element.children.length > 0) search(element);
      });
    };
    search(this);
    return result;
  }
}

module.exports = Tree;
