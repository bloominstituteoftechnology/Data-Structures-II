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
    // check if parent node is value
    // if the parent has no children, just check the parent value
    if (this.children === undefined) return this.value === value;
    // if the parent has only one child and that child has no children
    // if (this.children.length === 1 && this.children.children === []) return this.children[0].value === value;
    // else the parent has children
    const searchTree = (node) => {
      // if the node has more than one node to check
      // node[0] is not an Array so wrap it in [ ]
      // Array.slice returns an Array
      if (node.length > 1) return searchTree([node[0]]) || searchTree(node.slice(1));
      // else the node only has one node
      const child = node[0];
      // if node has no children
      if (child.children.length === 0) return child.value === value;
      // else the node has children (nested)
      return searchTree(child.children);
    };
    return searchTree(this.children);
  }
}

module.exports = Tree;
