class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = null;
  }
  addChild(value) {
    return this.children.push(new Tree(value));
  }
  contains(value) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(value)) return true;
    }
    if (this.value !== value) {
      return false;
    }
    return true;
  }
}


module.exports = Tree;
