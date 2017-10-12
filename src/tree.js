/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    this.children.push((new Tree(value, this.children)));
    //   value,
    //   children: this.children,
  }
  // addChild(value) {
  //   this.children.push({ value, children: this.children });
  // }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    let i = 0;
    const len = this.children.length;
    for (; i < len; i++) {
      if (this.children[i].value === value || this.children[i].contains(value)) {
        return true;
      }
    }
    return false;
  }
}

//   contains(value) {
//     let i = 0;
//     const l = this.children.length;  
//     for (; i < l; i++) {
//       if (this.children[i].value === value) {
//         // console.log(`Found ${value} at index: ${i} ${this.children[i]}`);
//         return true;
//       }
//     } 
//     return false;
//   }
// }

// const tree00 = new Tree();
// // -------------------------------------------
// tree00.addChild(10);
// tree00.addChild(11);
// tree00.addChild(12);
// tree00.addChild(13);
// // -------------------------------------------
// console.log(tree00);
// // -------------------------------------------
// tree00.contains(12);
// tree00.contains(21);
// -------------------------------------------

module.exports = Tree;
