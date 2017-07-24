class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    const node = new Tree(value);
    this.children.push(node);
  }
  contains(value) {
    let bool = false;
    const recFunction = (obj) => {
      if (obj.value === value) bool = true;
      for (let i = 0; i < obj.children.length; i++) {
        recFunction(obj.children[i]);
      }
    };
    recFunction(this);
    return bool;
  }
}
module.exports = Tree;
