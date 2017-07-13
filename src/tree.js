class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild() {
    // value,
    // children [ { value, children []}]
    return this;
  }
  contains() {
    return this;
  }
}

module.exports = Tree;
