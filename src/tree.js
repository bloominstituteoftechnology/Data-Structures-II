class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    if (value instanceof Tree) {
      this.children.push(value);
    } else {
      this.children.push(new Tree(value));
    }
  }
  contains(value) {
    if (value === this.value) {
      return true;
    }
    if (this.value instanceof Tree) {
      if (this.value.contains(value)) {
        return true;
      }
    }
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(value)) {
        return true;
      }
    }
    return false;
  }
  get size() {
    let count = this.children.length;
    if (this.value instanceof Tree) {
      count += 1 + this.value.size;
    }
    for (let i = 0; i < this.children.length; i++) {
      count += this.children[i].size;
    }
    return count;
  }
}

module.exports = Tree;
