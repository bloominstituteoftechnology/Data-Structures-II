class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(data) {
    const newTree = new Tree(data);
    this.children.push(newTree);
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
