class Graph {
  constructor() {
    this.data = {};
    this.nodesArray = [];
    this.edges = [];
  }



  addVertex(node) {
    if(Object.values(arguments).length > 1) {
      if(!this.data[node]) {

        this.data[Object.values(arguments)[0]] = [];
        this.nodesArray.push(Object.values(arguments)[0]);

        Object.values(arguments).forEach((arg, i) => {
          if(this.nodesArray.indexOf(arg) !== -1) {
            Object.values(arguments).forEach((el, z) => {
              if (Array.isArray(el)) {
                if(this.checkIfEdgeExists(arg, el[0]) === false){
                  this.addEdge(arg, el[0]);
                }
              } else {
                if(this.checkIfEdgeExists(arg, el) === false){
                  this.addEdge(arg, el);
                }
              }
            });
          }
        });
      }
    }

    if (!this.data[node]) {
      let a = Object.keys(this.data);
      this.data[node] = [];
      this.nodesArray.push(node);

      if(a.length == 1) {
        this.addEdge(a[0], node);
      }
    }
    return node;
  }

  contains(item) {
    return this.data[item] ? true : false;
  }


  removeVertex(node) {
    var refsToRemove = this.data[node];
    delete this.data[node];
    refsToRemove.forEach(function(ref){
      if(this.data[ref].includes(node)){
        var item = this.data[ref].indexOf(node);
        this.data[ref].splice(item, 1);
      }
    }.bind(this));


    var idxToRemove = this.nodesArray.indexOf(node);

    this.nodesArray.splice(idxToRemove, 1);
    delete this.data[node];
  }

  checkIfEdgeExists(fromNode, toNode) {
    if(
      this === undefined ||
      this.data === undefined ||
      this.data[fromNode] === undefined ||
      this.data[toNode] === undefined
    ) {
      return false;
    }

    return this.data[fromNode].includes(toNode);
  }


  addEdge(fromNode, toNode) {
    this.data[fromNode].push(toNode);
    this.data[toNode].push(fromNode);
  }

  removeEdge(fromNode, toNode) {
    var param1 = this.data[fromNode].indexOf(toNode);
    var param2 = this.data[toNode].indexOf(fromNode);
    this.data[fromNode] = this.data[fromNode].filter((el, i) => i !== param1);
    this.data[toNode] = this.data[toNode].filter((el, i) => i !== param2);
    if(this.data[fromNode].length === 0) {
      this.removeVertex(fromNode);
    }

    if(this.data[toNode].length === 0) {
      this.removeVertex(toNode);
    }
  }
};


module.exports = Graph;
