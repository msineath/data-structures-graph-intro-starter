
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
    const array = []; 
    let visited = new Set;
    let pushed = true;
    while(pushed) {
      pushed = false;
      if (!visited.has(startingVertex)) {
        visited.add(startingVertex);
        array.push(startingVertex);
        pushed = true;
      }
      let neighbors = this.adjList[startingVertex]
      for(let i = neighbors.length - 1; i > -1; i--) {
        if (!visited.has(neighbors[i]))  {
          startingVertex = neighbors[i];
          break;
        }
      }
    }
    // if (array.length !== Object.keys(this.adjList).length) {
    //   for (let key in this.adjList) {
    //     if (!visited.has(key)) {
    //       visited.add(key);
    //       array.push(key);
    //     }
    //   }
    // }
    return array;
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
    
    if(!visited.has(startingVertex)) {
      visited.add(startingVertex);
      vertices.push(startingVertex);
      this.adjList[startingVertex].forEach(vertex => this.depthFirstTraversalRecursive(vertex, visited, vertices));
    }
    return vertices;
  }
}

module.exports = {
  Graph
};









