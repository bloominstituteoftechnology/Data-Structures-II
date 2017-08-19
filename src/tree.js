class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    this.value = value;
    this.children.push(new Tree(value));
  }
  contains(value) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].value === value) return true;
    }
    return false;
  }
}

module.exports = Tree;
