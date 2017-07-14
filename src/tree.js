class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
<<<<<<< HEAD
    this.children.push(new Tree(value));
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
=======
    const x = value;
    return x;
  }
  contains() {
    return;
>>>>>>> 06872ed61f7c3de39e11d540fb55b360c9a8e93e
  }
}

module.exports = Tree;
