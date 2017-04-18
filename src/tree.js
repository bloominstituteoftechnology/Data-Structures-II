class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const tree = new Tree(value);
    this.children.push(tree);
  }

  contains(value) {
    let found = false;

    const search = (children) => {
      for (let i = 0, len = children.length; i < len; i++) {
        if (children[i].value === value) found = true;
        if (children[i].children.length > 0) search(children[i].children);
      }
    };
    search(this.children);
    return found;
  }
}

module.exports = Tree;
