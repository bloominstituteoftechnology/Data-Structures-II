// Copied this from a classmate.
// It serves well to observe / understand best practice.
// QUESTION: Is 'parent' null only for the root?

class Tree {

  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = null;
  }

  addChild(value) {
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
  }
 }

module.exports = Tree;
