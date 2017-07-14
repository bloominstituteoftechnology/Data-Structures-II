class Tree {
  constructor(firstUndefined) {
    this.value = firstUndefined;
    this.children = [];
  }
  addChild(stork) {
    const node = new Tree(stork);
    this.children[this.children.length] = node;
  }
  contains(love) {
    if (this.value === love) {
      return true;
    }
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(love)) {
        return true;
      }
    }
    return false;
  }
}

// const testTree1 = new Tree;
// console.log(testTree1);
// testTree1.addChild('Alice');
// console.log(testTree1);
// testTree1.addChild('Fred');
// console.log(testTree1);
// testTree1.addChild('Anshuman');
// console.log(testTree1);
// console.log(`Q: does Tree contain Donnie Brasco? A: ${testTree1.contains('Donnie Brasco')}`) //---> false
// console.log(`Q: does Tree contain Anshuman? A: ${testTree1.contains('Anshuman')}`) //---> true

module.exports = Tree;
