# Data Structures I

Topics:

 * Trees
 * Graphs
 * Queues
 * Linked Lists
 * Hash Tables



#### Trees

 * Should have the methods: `add`, `remove`, and a getter for the property `size`
 * `add` should accept a value and place it on top of the stack.
 * `remove` should remove and return the top value off of the stack.
 * `size` should return how many items are on the stack.

#### Graphs

 * Should have the methods: `enqueue`, `dequeue`, and a getter for the property `size`
 * `enqueue` should add an item to the back of the queue.
 * `dequeue` should remove an item from the front of the queue.
 * `size` should return the number of items in the queue.

#### Binary Search Tree

 * Should have the methods: `addToTail`, `removeHead`, and `contains`.
 * `addToTail` replaces the tail with a new value that is passed in.
 * `removeHead` removes and returns the head node.
 * `contains` should searth through the linked list and return true if a matching value is found.
 * The `head` property is a reference to the first node and the `tail` property is a reference to the last node.  These are the only two properties that you need to keep track of an infinite number of nodes.  Build your nodes with objects.

### Extra Credit

 * Uncomment the final test in `hash-table.test.js` and make the hash-table rebalance.  As a hash table increases in size the associated storage table will typically double in size once it reaches a certain capacity.  Change the hash table so that it doubles the size of the storage table once it is 75% full.
 * Make the linked-list a doubly linked list.
