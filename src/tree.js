class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    const newNode = new Tree(value);
    this.children.push(newNode);
  }
  contains(target) {
    let result = false;
    const inner = (obj) => {
      if (obj.value === target) {
        result = true;
      }
      obj.children.forEach((child) => {
        inner(child);
      });
    };
    inner(this);
    return result;
  }
}
module.exports = Tree;
