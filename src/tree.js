class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(newValue) {
    const node = new Tree(newValue);
    this.children.push(node);
  }
  contains(searchValue) {
    if (searchValue === this.value) return true;
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(searchValue)) return true;
    } return false;
  }
}

module.exports = Tree;
