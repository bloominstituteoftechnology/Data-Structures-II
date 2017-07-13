class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    this.children.push(new Tree(value));
  }

  contains(thing) {
    if (this.value === thing) {
      return true;
    }
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].value === thing) {
        return true;
      }
      if (this.children[i].children.length > 0) {
        for (let j = 0; j < this.children[i].children.length; j++) {
          this.children[j].contains(thing);
	}
        return true;
      }
    }
    return false;
  }
}

//const thisIsaTree = new Tree(7);
//console.log(thisIsaTree);
//console.log(thisIsaTree.addChild(27));

module.exports = Tree;
