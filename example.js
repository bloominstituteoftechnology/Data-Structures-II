class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
  }
  contains(arg) {
    let bool = false;
    this.children.forEach((item) => {
      for (let i = 0; i < item.children.length; i++) {
        let currentChildren = item.children[i];
        console.log(item.children[i]);
        while (currentChildren !== undefined) {
          console.log(currentChildren);
          if (currentChildren.value === arg) {
            bool = true;
            return true;
          }
          currentChildren = currentChildren.children;
        }
      }
      if (item.value === arg) {
        bool = true;
        return 0;
      }
    });
    return bool;
  }
}

const tree = new Tree();
tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
console.log(tree.contains(7));
console.log(tree.contains(9));
