class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Should have the methods: `addChild`, and `contains`
  addChild(val) {
    // When you add nodes to the `children` array
    // use `new Tree(value)` to create the node.
    // const node = new Tree();
    // const value = this.value;
    const node = new Tree(val);
    // children[0].value
    this.children[this.children.length] = node;// = [{ value, node }];
  }
  // node.addChild();
  contains(param) {
    if (this.value === param) {
      return true;
    }
    return false;
  }
}

module.exports = Tree;

// const tree = {
//   value: 5,
//   children: [
//     {
//       value: 10,
//       children: []
//     },
//     {
//       value: 12,
//       children: []
//     },
//     {
//       value: 2,
//       children: []
//     }
//   ]
// };
