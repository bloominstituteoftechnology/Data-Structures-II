// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const node = new BinarySearchTree(value);
    let currentNode = this;
    while (currentNode) {
      if (node.value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = node;
          break;
        }
        currentNode = currentNode.left;
      } else {
        if (node.value > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = node;
            break;
          }
        }
        currentNode = currentNode.right;
      }
    }
  }
  contains(value) {
    let currentNode = this;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value <= currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  depthFirstForEach(cb) {
    // console.log(node)
    const depthFirstSearch = (node) => {
      if (node) {
        // console.log(node.value) // --> 5 --> 3 --> 4
        cb(node.value);
        depthFirstSearch(node.left);
        depthFirstSearch(node.right);
      }
    };
    const node = this;
    depthFirstSearch(node);
  }
}

// const binarySearchTree = new BinarySearchTree(5)
// binarySearchTree.insert(2);
// binarySearchTree.insert(3);
// binarySearchTree.insert(7);
// //console.log(binarySearchTree)
// // console.log(binarySearchTree.contains(3));
// // console.log(binarySearchTree.contains(8));
//
// //const foo = value => ((array.push(value)));
// //binarySearchTree.depthFirstForEach(foo);
// binarySearchTree.depthFirstForEach();
// //console.log(binarySearchTree)


module.exports = BinarySearchTree;
