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
