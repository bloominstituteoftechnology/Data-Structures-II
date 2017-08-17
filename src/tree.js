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

/* Test
const tree = new Tree();
tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
tree.contains(7);
tree.contains(8);
console.log(tree.children[1])
console.dir(tree)

 Tree
 ├── 5
 │   └── 7
 └── 6
     └── 8

*/
