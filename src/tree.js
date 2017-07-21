class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
     const node = {
       value: value,
       children: [],
     };
     this.children.push(node);
  }

  contains(value) {
    if (this.value === value) return true;
    for (let i = 0; i < this.children; i++) {
      if (this.children[i].value !== value) this.contains.value;
    }
    return false;
  }
}

module.exports = Tree;
