class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    this.children.push(new Tree(value));
  }

  contains(thing) {
    let counter = 0;
    if (this.value === thing) {
      counter++;
    }
    for (let i = 0; i < this.children.length; i++) {
      counter += this.children[i].contains(thing);
    }
    return (counter > 0);
  }
}

//const thisIsaTree = new Tree(7);
//console.log(thisIsaTree);
//console.log(thisIsaTree.addChild(27));

module.exports = Tree;
