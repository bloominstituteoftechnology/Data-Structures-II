class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(child) {
    this.children.push(new Tree(child));
  }
  contains(searchItem) {
    let flag = false;
    if (this.value === searchItem) {
      flag = true;
      return flag;
    }
    // else {
    this.children.forEach((child) => {
      if (child.value === searchItem) flag = true;
    });
    if (flag) return true;
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].children.length !== 0) flag = this.children[i].contains(searchItem);
      if (flag) return flag;
    }
    return flag;
    // }
  }
}

// const tree = new Tree(0);
// tree.addChild(5);
// tree.addChild(6);
// console.log(tree)
// console.log(tree.children)
// tree.children[0].addChild(7);
// tree.children[1].addChild(8)
// console.log(tree)
// console.log(tree.children[0])
// console.log(tree.contains(9))
// Tree {
//   value: 0,
//   children: [
//     {
//       value: 5,
//       children: [{value: 7, children: []}]
//     },
//     {
//       value: 6,
//       children: [{ value: 8, children: []}]
//     }
//   ]
// }
module.exports = Tree;
