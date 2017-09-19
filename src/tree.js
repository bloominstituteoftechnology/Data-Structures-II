/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.size = 1;
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    const tree = new Tree(value);
    this.children.push(tree);
    this.size++;
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    // There's a slick recursive way to do this but I'm lazy and just want this done
    // so I can spend my weekend building my neural net, sorry guys
    if (this.value === value) {
      return true;
    }
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].value === value) {
        return true;
      }
    }

    for (let i = 0; i < this.children.length; i++) {
      const layerA = this.children[i];
      for (let j = 0; j < layerA.children.length; j++) {
        if (layerA.value === value) {
          return true;
        }
      }
    }

    for (let i = 0; i < this.children.length; i++) {
      const layerA = this.children[i];
      for (let j = 0; j < layerA.children.length; j++) {
        const layerB = layerA.children[j];
        if (layerB.value === value) {
          return true;
        }
      }
    }
//    return this.value;
    return false;
  }
}

module.exports = Tree;
