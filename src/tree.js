/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node
  addChild(value) {
    const child = new Tree(value);   // create the child node that inherits the Tree properties (value of "value" and that it has access to the array)
    this.children.push(child);      // push child into the array
  }

  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    if(this.value === value) {  // quickly check if your current value (root) is the value you're searching for
      return true;
    }
    for(let i = 0; i < this.children.length; i++) {  // otherwise.... iterate all the elements in children
      if(this.children[i].contains(value)){  // run contains on that element you're on, passing in "value".. will loop to first if and check.
        return true;
      };
    }
    return false;  // otherwise, return false (value not in tree)
  }
}
module.exports = Tree;
