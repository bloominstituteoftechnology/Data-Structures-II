class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const child = new Tree(value);
    this.children.push(child);
  }

  contains(value) {
    const check = (i = 0) => {
      if (i === this.children.length) return false;
      if (value === this.children[i].value) return true;
      if (this.children[i].children.length > 0) {
        if (this.children[i].contains(value)) return true;
      }
      return check(++i);
    };

    return check();
  }
}

module.exports = Tree;
