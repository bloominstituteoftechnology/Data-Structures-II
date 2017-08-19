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
    let isContained = false;
    if (this.value === value) {
      isContained = true;
    } else {
      for (let i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(value)) {
          isContained = true;
        }
      }
    }
    return isContained;
  }
}

module.exports = Tree;
