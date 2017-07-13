class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  root = null;
  addChild(value) {
    if (root === null) {
      root = new Tree(value);
    }
  }

  contains(value) {
    let checkingTree =0;
  }
  
}

module.exports = Tree;
