// Instructions from tree.test.js:
/*
  1. should have methods named "addChild" and "contains"
  2. should add children to the tree
    tree.children[0].value === 5
  3. should return true for a value that the tree contains
    tree.contains(5) === true
  4. should return false for a value that was not added
  5. should be able to add children to a tree\'s child
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).toBe(6);
  6.should correctly detect nested children
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
    let flag = false;
    const search = (children) => {
      for (let i = 0; i < children.length; i++) {
        if (children[i].value === value) flag = true;
        if (children[i].children.length > 0) search(children[i].children);
      }
    };
    search(this.children);
    return flag;
  }
}

module.exports = Tree;

// Tests
// const tree = new Tree();
// tree.addChild(5)
// tree.addChild(6);
// tree.children[0].addChild(7);
// tree.children[1].addChild(8);
// tree.contains(7)
// console.log(tree.contains(8))
// console.log(tree.children[1].children[0]);
