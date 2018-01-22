/* eslint-disable */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node
  //  // Whatever node is input, that node becomes the top of the tree aka the Tree Node
  //  // A tree node is able to access its  
  addChild(value) {
      // Create a new instance 'tree', which passes the input 'value' into the Tree parent class
      const tree = new Tree(value);
      // the this context still refers to initial tree, so you can write the following in order to
      // push the 
      // Same as 'this.children.push(new Tree(value)); if you don't like the 'tree' variable
      // 'tree' aka the new Tree node, is then pushed to the children array.
      this.children.push(tree);  

  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  //  // Now we look through each of the nodes in the Tree's children array - called 'child'
  //  // "We are going to start at a node and we are going to check all of its children to see if any of that tree
  //  // node's children match the value we are looking for." (depthFirstForEach)
  //  // depthFirst -- Down the side of left side of the tree first
  //  //            -- Then back up searching recursively through each of the children nodes spanning to the right
  //  //            -- Until the top is reached, at which point the search goes down the right side first
  //  //            -- Then checks each of the children nodes in each 
  contains(value) {
      // start off with a flag variable and set it to false; assumes false until 'value' is found
      let containsValue = false;
      // if the 'this.value' - the "Tree node" at the top of the tree ('Dr.Appleton' in Quakka example) is equal
      // to the value you are searching for, then you have found the value!  Return true!
      if (this.value === value) return containsValue = true;
      // If 'Dr.Appleton' is not the value you are searching for, then you will need to tell the computer to search
      // recursively through the entire family tree. -- NONONO!  This is wrong! The above if statement is entirely separate
      // from what is below.  First the above if statement runs, and if the Tree node is the value being searched for, then
      // the program closes.  
      // The code below is NOT part of the if statement!  The code below deals with the entirely separate scenario, which
      // could be written inside of --if (this.value !== value) {HERE}-- but this line is not written in because it is 
      // unnecessary to do so.
        const search = (children) => {
          // For each of Dr.Appleton's children, first they will be compared with the child('value') you are seeking, then
          // then IF they have children, then 
          children.forEach((child) => {
              if (value === child.value) return containsValue = true;
              // checks to see if there are more children to look through
              // Recursion - maps out the entire Tree first,
              if (child.children.length); {
                  search(child.children);
              }
          });
      };
      // This is the point at which search is actually executed.  The above is all just the recursive function 'search'
      // being defined.  
      search(this.children);
      return containsValue;
  }
}

module.exports = Tree;
