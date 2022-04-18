class Graph {
    constructor(x) {
        this.vertex = x;
        this.adjList = new Array(x);
        for (let i = 0; i < x; i++)
            this.adjList[i] = [];
    }

    addEdge(n, e) {
        this.adjList[n].push(e);
        this.adjList[e].push(n);
    }
     isCyclicUtil(v, visited,parent)
    {
    visited[v] = true;
    let i;
    for(let it of this.adjList[v].values())
{
    i = it;


    if (!visited[i])
{
    if (this.isCyclicUtil(i, visited, v))
    return true;
}
else if (i != parent)
    return true;
}
return false;
}
     isTree()
    {
        let visited = new Array(this.vertex).fill(false);
        for (let i = 0; i < this.vertex; i++)
        visited[i] = false;
        if (this.isCyclicUtil(0, visited, -1))
            return false;
        for (let u = 0; u < this.vertex; u++)
        if (!visited[u])
            return false;

        return true;
    }
}

const g = new Graph(5);

g.addEdge(0, 1);
g.addEdge(0,2);
g.addEdge(0,3);
g.addEdge(1,4);
console.log(g.isTree());