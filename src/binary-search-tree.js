// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const assignValueAt = (node) => {
      // if the left child is empty
      if (value <= node.value && node.left === null) {
        node.left = new BinarySearchTree(value);
        return;
      }
      // if the right child is empty
      if (value > node.value && node.right === null) {
        node.right = new BinarySearchTree(value);
        return;
      }
      // else there are children
      // traverse left
      if (value <= node.value) {
        assignValueAt(node.left);
        return;
      }
      // traverse right
      assignValueAt(node.right);
    };
    assignValueAt(this);
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
