// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
// class BinarySearchTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//     this.container = [value];
//   }

//   insert(value) {
//     const node = new BinarySearchTree(value);
//     if (value <= this.value) {
//       if (!this.left) this.left = node;
//       else this.left.insert(value);
//     } else if (value > this.value) {
//       if (!this.right) this.right = node;
//       else this.right.insert(value);
//     }
//   }

//   contains(value) {
//     if (value === this.value) {
//       return true;
//     } else if (value > this.value) {
//       if (this.right) {
//         return this.right.contains(value);
//       }
//       return false;
//     }
//   }

//   depthFirstForEach(cb) {
//     return this.container.forEach((i) => {
//       cb(i);
//     });
//   }
// }


class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.container = [value];
  }

  insert(value) {
    this.container.push(value);
    const node = new BinarySearchTree(value);
    if (value <= this.value) {
      if (!this.left) this.left = node;
      else this.left.insert(value);
    } else if (value > this.value) {
      if (!this.right) this.right = node;
      else this.right.insert(value);
    }
  }

  contains(value) {
    if (value === this.value) {
      return true;
    } else if (value > this.value) {
      if (this.right) {
        return this.right.contains(value);
      }
      return false;
    }
  }

  depthFirstForEach(cb) {
    return this.container.forEach((i) => {
      cb(i);
    });
  }
}

module.exports = BinarySearchTree;
