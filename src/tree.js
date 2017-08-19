class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(x) {
    const tree = new Tree(x);
    if (this.value) {
      this.children.push(tree);
    } else {
      this.value = tree;
    }
  }
  contains(y) {
    let flag = false;
    const recur = ((obj) => {
      if (y === obj.value) {
        return flag = true;
      }
      obj.children.forEach((child) => {
        recur(child);
      });
    });
    recur(this);
    return flag;
  }
}
module.exports = Tree;
