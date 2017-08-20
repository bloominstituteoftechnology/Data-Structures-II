
/**
 * #### Trees
 *
 * Should have the methods: `addChild`, and `contains`
 * Each node on the tree should have a `value` property and a `children` array.
 * `addChild(value)` should accept a value and add it to that node's `children` array.
 * `contains(value)` should return `true` if the tree or its children the given value.
 * When you add nodes to the `children` array use `new Tree(value)` to create the node.
 * You can instantiate the `Tree` class inside of itself.
 */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    this.children.push(new Tree(value));
  }

  contains(value) {
    let searchResult = false;
    const search = (tree) => {
      if (tree.value === value) {
        searchResult = true;
        return;
      }
      for (let i = 0; i < tree.children.length; i++) {
        search(tree.children[i]);
      }
    };
    search(this);
    return searchResult;
  }
}

module.exports = Tree;
