class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const childNode = new Tree(value);
    this.children.push(childNode);
  }

  contains(value, node) {
    node = node || this;

    if (node.value === value) return true;

    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        if (this.contains(value, node.children[i])) {
          return true;
        }
      }
    }
    return false;
  }
}

module.exports = Tree;
