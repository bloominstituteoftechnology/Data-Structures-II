// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-lonely-if */

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
    const searchBST = (node) => {
      // if there are no children,  return if the node value is the target
      if (node.left === null && node.right === null) return node.value === target;
      // if the value is found, just return true
      // regardless of where in the tree we are
      if (node.value === target) return true;
      // search left
      // if did not return true earlier, must be false
      if (target < node.value) return false || searchBST(node.left);
      // search right
      // if did not return true earlier, must be false
      return false || searchBST(node.right);
    };
    return searchBST(this);
  }

  depthFirstForEach(cb) {
    const searchDFS = (node) => {
      cb(node.value);
      if (node.left === null && node.right === null) {
        return;
      }
      if (node.left !== null) searchDFS(node.left);
      searchDFS(node.right);
      return;
    };
    searchDFS(this);
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
