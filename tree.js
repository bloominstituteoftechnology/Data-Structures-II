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
    let kids = [this];
    for (let i = 0; i < kids.length; i++) {
      if (kids[i].value === value) return true;
      else if (kids[i].children.length > 0) {
        kids = kids.concat(kids[i].children);
      }
    }
    return false;
  }
}

module.exports = Tree;
