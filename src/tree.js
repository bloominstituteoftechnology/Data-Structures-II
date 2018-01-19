
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
    let containsValue = false;
    if (this.value === value) 
    containsValue = true;
    return
    if (this.value !== value) {
      const search = (children) => {
        children.forEach((child) => {
          if (value === child.value)
          containsValue = true;
          return
          if (child.children.length) {
            search(child.children);
          }
        });
      };
      search(this.children);
      return containsValue;
    }
  }
}

module.exports = Tree;
