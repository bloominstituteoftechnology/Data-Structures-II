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

  * Should have the methods: `insert`, `contains`, `depthFirstForEach`, and `breadthFirstForEach`.
  * `insert(value)` inserts the new value at the correct location in the tree.
  * `contains(value)` searches the tree and returns `true` if the the tree contains the specified value.
  * `depthFirstForEach(cb)` should iterate over the tree using DFS and passes each node of the tree to the given callback function.
  * `breadthFirstForEach(cb)` should iterate over the tree using BFS and passes each node of the tree to the given callback function (hint: you'll need to either re-implement or import a queue data structure for this).

#### Graphs

  * Should have methods named `addvertex`, `contains`, `removeVertex`, `addEdge`, `checkIfEdgeExists`, and `removeEdge`
  * `addVertex(value, edges)` should add a new vertex to the graph with the specified value.  If `edges` is given then the new vertex should share an edge with the given vertex.
  * `contains(value)` should return true if the graph contains a vertex with the specified value.
  * `removeVertex(value)` should remove the vertex with the specified value from the graph.
  * `addEdge(fromVertex, toVertex)` should add an edge between the two specified vertices.
  * `checkIfEdgeExists(fromVertex, toVertex)` should return `true` if an edge exists between the two specified vertices.
  * `removeEdge(fromVertex, toVertex)` should remove the edge between the two specified vertices.


### Extra Credit

 * Read up on [heaps](https://en.wikipedia.org/wiki/Heap_(data_structure)) here. Then implement one! The methods you'll need to implement are already present inside the file.
 * Add a method to the `Graph` class that searches through the graph using edges. Make this search first as a depth first search and then refactor to a breadth first search.
 * Read up on [red-black trees](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree) here. Then implement one! No starter files or skeleton code here. If you've gotten this far, you're on your own! :)
