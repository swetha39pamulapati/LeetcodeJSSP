class Graph {
    constructor(x) {
        this.E =0;
        this.vertex = x;
        this.adjList = new Array(x);
        for (let i = 0; i < x; i++)
            this.adjList[i] = [];
    }

    addEdge(n, e) {
        this.E++;
        this.adjList[n].push(e);
        this.adjList[e].push(n);
    }
     DFS(v, visited) {
         visited[v] = true;
         for (let i of this.adjList[v].values()) {
             if (!visited[i]) {
                 this.DFS(i, visited);
             }
         }
     }
isConnected()
{
    let visited = [];
    this.DFS (0, visited);
    for(let i = 0; i<this.vertex; i++){
        if(!visited[i])
            return false;
    }
    return true;
}     isTree()
    {
        return this.isConnected() && this.E == this.vertex-1;
    }
}

const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0,2);
g.addEdge(0,3);
g.addEdge(1,4);
console.log(g.isTree());