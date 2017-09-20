/**
 * Breadth-First Traversal of a Binary Tree in JS
 * by Adrian Statescu <adrian@thinkphp.ro>
 * MIT Style License
 */

 function Node(info){

   this.info = info
   this.left = null;
   this.right = null;
   this.level = null;
 }

 Node.prototype.toString = function() {
   return this.info;
 }

 function BFT(node) {

  node.level = 1;

  var queue = [node];

  var output = [];

  var current_level = node.level;

  while(queue.length > 0) {

    current_node = queue.shift();

    if(current_node.level > current_level) {

     current_level++;
     output.push("\n");
   }

   output.push(current_node + " ");

   if(current_node.left) {
     current_node.left.level = current_level + 1;
     queue.push(current_node.left);
   }

   if(current_node.right) {
     current_node.right.level = current_level + 1;
     queue.push(current_node.right);
   }

 }

 return output.join("")
}

/*
       9
    1      3
  2   4  6   8
a   b   c
*/

var root = new Node(9);
root.left = new Node(8);
root.right = new Node(7);

root.left.left = new Node(2);
root.left.right = new Node(4);

root.right.left = new Node(6);
root.right.right = new Node(8);

root.left.left.left = new Node('a');
root.left.left.right = new Node('b');

root.left.right.right = new Node('c');

// alert(BFT(root))
console.log(BFT(root))