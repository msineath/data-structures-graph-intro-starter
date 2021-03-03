
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }

  addEdges(srcValue, destValue) {
    if (!this.adjList[srcValue]) this.addVertex(srcValue);
    if (!this.adjList[destValue]) this.addVertex(destValue);

    this.adjList[srcValue].push(destValue);
    this.adjList[destValue].push(srcValue);
  }

  buildGraph(edges) {
    // Code goes here ...
  }

  breadthFirstTraversal(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}

module.exports = {
  Graph
};









