# Data Structures II

Topics:

 * Tree
 * Graph
 * Binary Search Tree


#### Trees

  * Should have the methods: `addChild`, and `contains`
  * Each node on the tree should have a `value` property and a `children` array.
  * `addChild(value)` should accept a value and add it to that node's `children` array.
  * `contains(value)` should return `true` if the tree or its children the given value.
  * When you add nodes to the `children` array use `new Tree(value)` to create the node.
  * You can instantiate the `Tree` class inside of itself.

#### Binary Search Tree

  * Should have the methods: `insert`, `contains`, and `depthFirstForEach`.
  * `insert(value)` inserts the new value at the correct location in the tree.
  * `contains(value)` searches the tree and returns `true` if the the tree contains the specified value.
  * `depthFirstForEach(cb)` should iterate over the tree using DFS and passes each node of the tree to the given callback function.

#### Graphs

  * should have methods named `addNode`, `contains`, `removeNode`, `addEdge`, `getEdge`, and `removeEdge`
  * `addNode(newNode, toNode)` should add a new item to the graph.  If `toNode` is given then the new node should share an edge with an existing node `toNode`.
  * `contains(value)` should return true if the graph contains the given value.
  * `removeNode(value)` should remove the specified value from the graph.
  * `addEdge(fromNode, toNode)` should add an edge between the two specified nodes.
  * `getEdge(fromNode, toNode)` should return `true` if an edge exists between the two specified graph nodes.
  * `removeEdge(fromNode, toNode)` should remove the edge between the two specified nodes.

AND EXAMPLE FROM PATRICK

### Extra Credit

 * Add a method to the `Graph` class that searches through the graph using edges.  Make this search first as a depth first search and then refactor to a breadth first search.
