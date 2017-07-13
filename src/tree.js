class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Should have the methods: `addChild`, and `contains`
  addChild() {
    // When you add nodes to the `children` array
    // use `new Tree(value)` to create the node.
    // const node = new Tree();
    const node = new Tree();
    const value = this.value;
    this.children = [{
      value,
      node }];
  }
  contains() {
    return this;
  }
}

module.exports = Tree;
