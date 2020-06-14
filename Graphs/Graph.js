class Graph {

    constructor() {
        this.adjList = new Map();
        this.marked = [];
    }

    addVertex = (vertex) => {
        this.adjList.set(vertex, []);
    }

    addEdge = (source, dest) => {
        this.adjList.get(source).push(dest);
        this.adjList.get(dest).push(source);
    }

    printGraph = () => {
        const keys = this.adjList.keys();
        for (const i of keys) {
            const values = this.adjList.get(i);
            let path = '';
            for (const j of values) {
                path += j + ',';
            }
            console.log(i + '-> ' + path);
        }
    }

    dfs = (vertex) => {
        this.marked[vertex] = true;
        console.log(vertex);

        const neighbours = this.adjList.get(vertex);
        for(let v in neighbours){
            if(!this.marked[neighbours[v]]){
                this.dfs(neighbours[v]);
            }
        }
    }
}

const g = new Graph();
let vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

// adding vertices
for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.printGraph();
console.log('DFS:');
g.dfs('C');
