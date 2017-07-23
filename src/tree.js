class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
<<<<<<< HEAD
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
=======
    const tree = new Tree(value);
    this.children.push(tree);
  }
  contains(value) {
    let containsValue = false;
    const search = (children) => {
      children.forEach((child) => {
        if (value === child.value) return containsValue = true;
        if (child.children.length) {
          search(child.children);
        }
      });
    };
    search(this.children);
    return containsValue;
>>>>>>> c25622d73d1c0105cff8f94e1017fb6f837f82bb
  }
}

module.exports = Tree;
