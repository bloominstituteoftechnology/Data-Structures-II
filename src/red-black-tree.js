class Node {
  constructor({parent, value = null, isBlack = false} = {}) {
    this.value = value;
    this.black = isBlack;
    this.leftChild = null;
    this.rightChild = null;
    // the code in the if lets me interact with null nodes as if they were real but I don't create an infinate chain of null nodes
    if (!this.isNullNode) {
      this.leftChild = new Node({parent: this});
      this.rightChild = new Node({parent: this});
    } else {
      this.black = true;
    }
    this.parent = parent;
  }
  set value(value) {
    if (value !== null && this.value === null) {
      this.v = value;
      this.leftChild = new Node({parent: this});
      this.rightChild = new Node({parent: this});
    }
    if (this.v === undefined) {
      this.v = value;
    }
    return this.value;
  }
  set isBlack(isBlack) {
    if (this.isNullNode) {
      return true;
    }
    this.black = isBlack;
    return this.isBlack;
  }
  set isRed(isRed) {
    if (this.isNullNode) {
      return false;
    }
    this.black = !isRed;
    return this.isRed;
  }
  get value() {
    return this.v;
  }
  get grandParent() {
    if (this.hasGrandParent()) {
      return this.parent.parent;
    }
  }
  get uncle() {
    if (this.hasGrandParent()) {
      const gp = this.grandParent;
      if (gp.leftChild === this.parent) {
        return gp.rightChild;
      }
      return gp.leftChild;
    }
  }
  get brother() {
    if (this.parent.leftChild === this) {
      return this.parent.rightChild;
    }
    return this.parent.leftChild;
  }
  get predecessor() {
    let current = this.leftChild;
    while (!current.isNullNode) {
      current = current.rightChild;
    }
    return current;
  }
  get successor() {
    let current = this.rightChild;
    while (!current.isNullNode) {
      current = current.leftChild;
    }
    return current;
  }
  get isRoot() {
    return this.parent === undefined;
  }
  get isNullNode() {
    return this.value === null;
  }
  get isLeaf() {
    return this.leftChild.isNullNode && this.rightChild.isNullNode;
  }
  get isLeftChild() {
    if (this.isRoot) {
      return false;
    }
    return this.parent.leftChild === this;
  }
  get isRightChild() {
    if (this.isRoot) {
      return false;
    }
    return this.parent.rightChild === this;
  }
  get isBlack() {
    if (this.isNullNode) {
      return true;
    }
    return this.black;
  }
  get isRed() {
    if (this.isNullNode) {
      return false;
    }
    return !this.black;
  }
  hasParent() {
    return !this.isRoot;
  }
  hasGrandParent() {
    if (this.isRoot) {
      return false;
    }
    return this.parent.parent !== undefined;
  }
  move(toNode) {
    if (this.isNullNode || this.value < toNode.value) {
      return false;
    }
    let child;
    if (!this.isLeaf) {
      if (this.isLeftChild) { // successor
        this.rightChild.parent = this.parent;
        this.parent.leftChild = this.rightChild;
        child = this.rightChild;
      } else { // predecessor
        this.leftChild.parent = this.parent;
        this.parent.rightChild = this.leftChild;
        child = this.leftChild;
      }
    }
    this.parent = toNode.parent;
    this.leftChild = toNode.leftChild;
    this.rightChild = toNode.rightChild;
    if (toNode.isLeftChild) {
      this.parent.leftChild = this;
    } else {
      this.parent.rightChild = this;
    }
    this.isBlack = toNode.isBlack
    if (child instanceof Node) {
      child.solveConflicts();
    }
    return true;
  }
  solveConflicts() {
    if (this.isRoot) {
      this.isBlack = true;
    }
    if (this.isBlack) { // black shouldn't have errors if everything else worked how it's meant to
      return;
    }
    const flipColor = (node) => {
      node.isBlack = !node.isBlack;
      node.leftChild.isBlack = !node.isBlack;
      node.rightChild.isBlack = !node.isBlack;
      node.solveConflicts();
    };
    const rotateRight = () => {
      const gp = this.grandParent;
      const parent = this.parent;
      const rc = this.rightChild;
      const isLeft = this.parent.isLeftChild;

      this.parent = gp;

      if (this.hasGrandParent()) {
        console.log(this.grandParent);
        if (isLeft) {
          gp.leftChild = this;
        } else {
          gp.rightChild = this;
        }
      } 

      parent.parent = this;
      parent.leftChild = rc;

      this.rightChild = parent;

      if (this.hasGrandParent())
        console.log('RIGHT ', this.value, this.isRightChild, this.parent.value, this.rightChild.value, this.grandparent.value);
      else if (this.hasParent())
        console.log('RIGHT ', this.value, this.isRightChild, this.parent.value, this.rightChild.value);
      else 
        console.log('RIGHT ', this.value, this.rightChild.value);
      this.solveConflicts();
    };
    const rotateLeft = () => {
      const gp = this.grandParent;
      const parent = this.parent;
      const lc = this.leftChild;
      const isLeft = this.parent.isLeftChild;

      if (this.hasGrandParent()) {
        this.parent = gp;
        if (isLeft) {
          gp.leftChild = this;
        } else {
          gp.rightChild = this;
        }
      }

      parent.parent = this;
      parent.rightChild = lc;

      this.leftChild = parent;

      if (this.hasGrandParent())
        console.log('LEFT ', this.value, this.isLeftChild, this.parent.value, this.leftChild.value, this.grandparent.value);
      else if (this.hasParent())
        console.log('LEFT ', this.value, this.isLeftChild, this.parent.value, this.leftChild.value);
      else 
        console.log('LEFT ', this.value, this.leftChild.value);
      this.solveConflicts();
    };
    // find conflicts
    if (this.parent.isRed) {
      if (this.uncle.isRed) {
        flipColor(this.grandParent);
      } else {
        rotateLeft();
      }
    } else if (this.leftChild.isRed) {
      rotateRight();
    }
    // if (this.leftChild.isRed) { // make sure everything was caught.
    //   console.log(`${this.isBlack ? '~Black' : '~Red'}: ${this.leftChild.value}`);
    //   this.leftChild.solveConflicts();
    // }
    // if (this.rightChild.isRed) { // make sure everything was caught.
    //   console.log(`${this.isBlack ? 'Black~' : 'Red~'}: ${this.rightChild.value}`);
    //   this.rightChild.solveConflicts();
    // }
  }
}

class RedBlackTree {
  constructor(value) {
    this.root = new Node({ value, isBlack: true });
    this.s = 0;
    if (!this.root.isNullNode) {
      this.size++;
    }
  }
  getNode(value) {
    let current = this.root;
    while (current.value !== null) {
      if (value < current.value) {
        current = current.leftChild;
      } else if (value > current.value) {
        current = current.rightChild;
      } else if (value === current.value) {
        return current;
      }
    }
    return current;
  }
  add(value) {
    const node = this.getNode(value);
    console.log(node.isNullNode + ' ' + value);
    if (!node.isNullNode) { // didn't add support for duplicates. same as my binary tree
      return false;
    }
    node.value = value;
    node.isRed = true;
    node.solveConflicts();
    console.log('old root: ' + this.root.value);
    if (node.isRoot) {
      this.root = node;
      console.log('new root: ' + node.value);
    }
    return ++this.size;
  }
  remove(value) {
    const node = this.getNode(value);
    if (node.isNullNode) {
      return;
    }
    if (!node.isLeaf) {
      if (!node.successor.move(node)) {
        if (!node.predecessor.move(node)) {
          return;
        }
      }
    } else {
      node.value = null;
    }
    --this.size;
    return node.value;
  }
  contains(value) {
    return !this.getNode(value).isNullNode;
  }
  eachDFS(cb) {
    const node = arguments[1] || this.root;
    if (!(node instanceof Node)) {
      return;
    }
    cb(node.value, node);
    const searchBranch = (branch) => {
      if (!branch.isNullNode) {
        this.depthFirstForEach(cb, branch);
      }
    };
    searchBranch(node.leftChild);
    searchBranch(node.rightChild);
  }
  eachBFS(cb) {
    if (this.root.isNullNode) {
      return;
    }
    let cache = [this.root];
    let currentLevelQueue = [];
    let nextLevelQueue = [];
    let layer = 1;
    const addToQueue = (branch) => {
      if (!branch.isNullNode) {
        if (cache.indexOf(branch.parent) < 0) {
          console.log(`Isn't in cache:::: branch: ${branch.value}  parent: ${branch.parent.value}`);
          currentLevelQueue.push(branch);
          cache.push(branch);
        } else {
          console.log(`Is in cache:::: branch: ${branch.value}  parent: ${branch.parent.value}`);
          nextLevelQueue.push(branch);
        }
      }
    };
    let current;
    do {
      current = currentLevelQueue.shift() || this.root;
      console.log(`Node: ${current.value}  LeftChild: ${current.leftChild.value}  RightChild: ${current.rightChild.value}`);
      // console.log(queue);
      cb(current.value, current, layer);
      addToQueue(current.leftChild);
      addToQueue(current.rightChild);
      if (currentLevelQueue.length === 0 && nextLevelQueue.length > 0) {
        currentLevelQueue = nextLevelQueue;
        nextLevelQueue = [];
        console.log('CACHE CLEARED')
        cache = [];
        layer++;
      }
    } while (currentLevelQueue.length > 0);
  }
  set size(length) {
    this.s = length;
    return this.s;
  }
  get size() {
    return this.s;
  }
}

const rbt = new RedBlackTree(5);
const array = [1,2,3,4,5,6];
array.forEach(num => rbt.add(num));
console.log(rbt.size);
console.log(rbt.contains(9));
console.log(rbt.contains(10));
rbt.eachBFS((value, node, layer) => {
  if (node.isBlack) {
    console.log(`Black: ${value}  Layer: ${layer}`);
  } else {
    console.log(`Red: ${value}  Layer: ${layer}`);
  }
});
/* correct answer
  Black: 8
  Red: 4
  Red: 12
  Black: 2
  Black: 6
  Black: 10
  Black: 16
  Black: 1
  Black: 3
  Black: 5
  Black: 7
  Black: 9
  Black: 11
  Red: 14
  Red: 18
  Black: 13
  Black: 15
  Black: 17
  Black: 19
  Red: 20
*/
