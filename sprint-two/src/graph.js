

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(JSON.stringify(node));
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let removeNeighbors = this.nodes[node];
  for (var i = 0; i < removeNeighbors.length; i++) {
    this.removeEdge(node, removeNeighbors[i]);
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[JSON.stringify(fromNode)].push(toNode);
  this.nodes[JSON.stringify(toNode)].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let fNode = this.nodes[JSON.stringify(fromNode)];
  let tNode = this.nodes[JSON.stringify(toNode)];
  for (var i = 0; i < fNode.length; i++) {
    if (fNode[i] === toNode) {
      fNode.splice(i, 1);
      for (var j = 0; j < tNode.length; j++) {
        if (tNode[j] === fromNode) {
          tNode.splice(j, 1);
          break;
        }
      }
      break;
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.nodes) {
    cb(Number(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


