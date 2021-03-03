
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
    // let graph = {};
    edges.forEach(nodePair => {
      this.addEdges(nodePair[0], nodePair[1]);
    })
    return this.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    // Code goes here ...
    let visited = new Set();
    let q = [startingVertex];
    let returnArr = [];
    while(q.length) {
      let currentEl = q.shift();
      if(visited.has(currentEl)) continue;
      visited.add(currentEl);
      returnArr.push(currentEl);
      q.push(...this.adjList[currentEl]);
    }
    return returnArr;
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









