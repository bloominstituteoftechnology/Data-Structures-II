/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    if (this.value === undefined) {
      return;
    }
    const newTree = new Tree(value);
    this.children.push(newTree);
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    const obj = this.children;

    const flatten = (object) => {
      const elements = Object.keys(object);
      const flattenedArr = elements.reduce((memo, item) => {
        if (typeof object[item] === 'object') {
          return memo.concat(flatten(object[item]));
        }
        return memo.concat(object[item]);
      }, []);
      return flattenedArr;
    };

    const temp = flatten(obj);

    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === value) return true;
    }
    return false;
  }
}

module.exports = Tree;
