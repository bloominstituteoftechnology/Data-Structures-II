/* eslint-disable */
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
const Queue = require('./queue-helper');

class BinarySearchTree {
  constructor(value, parent = null) {  // the null is so that we do not have to specify the top element of the tree not having a parent.
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }

  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        return this.left = new BinarySearchTree(value, this);  // when we create the child what the parent should be.
      } 
      if (Object.prototype.hasOwnProperty.call(this.left, 'isNullLeaf') && this.left.isNullLeaf) {  // this if only occurs when we are dealing with 
				                                                                                           //  a red black tree
        this.left = new BinarySearchTree(value, this);  // red black version of the previous if black of creating a create and assigning it to the  
        this.left.isNullLeaf = false;                  // left subtree
        return this.left;
      }
      return this.left.insert(value);
    } 
    if (this.right === null) {
      return this.right = new BinarySearchTree(value, this); // same as 22
    }
    if (Object.prototype.hasOwnProperty.call(this.right, 'isNullLeaf') && this.right.isNullLeaf) {  // same as 24
      this.left = new BinarySearchTree(value, this);  // red black version of the previous if black of creating a create and assigning it to the
      this.right.isNullLeaf = false;                 //  right subtree
      return this.right;
    }
    return this.right.insert(value);
  }

  remove(node) {                                // removes a node and all of its descendants necessary for use in red black tree
    if (node.parent !== null) {                //  first we check if the node is a top node 
      if (node === node.parent.left) {        //  checks if its the left or right child of its parent 
        node.parent.left = null;             //   remove the corresponding reference from the parent's left child 
      } else {
        node.parent.right = null;          //    remove the corresponding reference from the parent's right child
      }
		}
      const tempNode = node;            // sets a temporary variable equal to node so we can set it equal to null
      node = null;
      if (tempNode.left !== null) this.remove(tempNode.left);    // if our node has a left child call remove recursively on it
      if (tempNode.right !== null) this.remove(tempNode.right); // if our node has a right child call remove recursively on it
      return tempNode;                // return the node
  }

  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (target < this.value) {
      return (this.left !== null) ? this.left.contains(target) : false;
    }
    if (target > this.value) {
      return (this.right !== null) ? this.right.contains(target) : false;
    }
    return true;
  }
  
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb);
    if (this.right !== null) this.right.depthFirstForEach(cb);
  }
  
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const queue = new Queue();
    queue.enqueue(this);
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      cb(node.value);
      if (node.left !== null) queue.enqueue(node.left);
      if (node.right !== null) queue.enqueue(node.right);
    }
  }
}

module.exports = BinarySearchTree;




/* eslint-disable */
// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/*class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  insert(value) {
     const newNode = new BinarySearchTree(value);
		 if (value < this.value) {
			 if (!this.left) { 
				 this.left = newNode;
		 }
			 else { 
				 this.left.insert(value);
		  }
		}
			 else {
				 if (!this.right) {
					 this.right = newNode;
				}
				  else {
					 this.right.insert(value);
		}
			 }
  }
	
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
		if (this.value === target) { 
			return true;
	 }
		if (this.left) {
			if (this.left.contains(target))
				return true;
		}
		  if (this.right) {
			 if (this.right.contains(target))
				return true;
		}
	   	return false;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
	   cb (this.value);
		 if (this.left)
			 this.left.depthFirstForEach(cb);
		 if (this.right)
			 this.right.depthFirstForEach(cb);
    };

  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
     const queue = [this];
		 let n;

		 while (queue.length > 0) {
			  
			 n = queue.shift();
			 cb(n.value);

			 if (n.left !== null) 
				 queue.push(n.left);
			
       if (n.right !== null)
				 queue.push(n.right);
			}
	}	 
} 

module.exports = BinarySearchTree; */
