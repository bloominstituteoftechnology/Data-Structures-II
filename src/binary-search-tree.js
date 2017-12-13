// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-lonely-if */
/* eslint-disable no-else-return */

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BinarySearchTree(value);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BinarySearchTree(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) return true;
    if (target <= this.value) {
      if (this.left) {
        return this.left.contains(target);        
      }
      return false;
    } else {
      if (this.right) {
        return this.right.contains(target);
      } else {
        return false;        
      }
    }
  }

  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb);      
    }
    return;
  }

  breadthFirstForEach(cb) {
    let layerHasChildren = true;
    let parentArr = [this];
    let childrenArr = [];
    while (layerHasChildren) {
      // we do not know if the new layer has children yet
      layerHasChildren = false;
      // for each parent (node) in the layer
      for (let i = 0; i < parentArr.length; i++) {
        const parent = parentArr[i];
        cb(parent.value);
        if (parent.left !== null) {
          layerHasChildren = true;
          childrenArr.push(parent.left);
        }
        if (parent.right !== null) {
          layerHasChildren = true;
          childrenArr.push(parent.right);
        }
      }
      if (layerHasChildren) parentArr = childrenArr.slice();
      childrenArr = [];
    }
  }
}

module.exports = BinarySearchTree;
