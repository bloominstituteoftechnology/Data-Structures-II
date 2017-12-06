class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const child = new Tree(value);
    child.parent = this;
    this.children.push(child);
  }

  removeFromParent() {
    if (this.parent) {
      const childNodeindex = this.parent.children.indexOf(this);
      this.parent.children.splice(this.parent.children.indexOf(this));
      this.parent = null;
    }
  }

  contains(target) {
    let result = false;

    const helper = function (child) {
      if (child.value === target) {
        result = true;
      } else if (child.value !== target && child.children.length > 0) {
        for (let j = 0; j < child.children.length; j++) {
          helper(child.children[j]);
        }
      }
    };

    if (this.value === target) {
      return true;
    } else if (this.value !== target) {
      for (let i = 0; i < this.children.length; i++) {
        helper(this.children[i]);
      }
    }

    return result;
  }

  traverse(callback) {
    let result;

    const helper = (child) => {
      if (child.value) {
        result = callback(child.value);
      } else if (child.value && child.children.length > 0) {
        for (let j = 0; j < child.children.length; j++) {
          helper(child.children[j]);
        }
      }
    };

    if (this.value) {
      result = callback(this.value);
      for (let i = 0; i < this.children.length; i++) {
        helper(this.children[i]);
      }
    }

    return result;
  }
}

module.exports = Tree;
