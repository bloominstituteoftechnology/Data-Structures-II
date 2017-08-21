class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    const node = new Tree(value);
    this.children[this.children.length] = node;
}
  }
contains(value) {
if(this.value === value) {
for(let i = 0; i < this.children.length; i++) {
if (this.children[i].contains(value)) {
return true;
}
}
return false;
}
}
module.exports = Tree;
