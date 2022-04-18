class Graph
{
    constructor(x){
        this.vertex = x;
        this.adjList = new Array(x);
        for(let i =0; i<x; i++)
            this.adjList[i] = [];
    }
    addEdge(n,e)
    {
        this.adjList[n].push(e);
        this.adjList[e].push(n);
    }
    graphUtil(v,visited){
        visited[v] = true;
        console.log(v + " ");
        for(let i of this.adjList[v].values()){
            let n =i;
            if(!visited[n]){
                this.graphUtil(n,visited);
            }
        }
    }
    connectedGraph(){
        let visited = [];
        let count = 0
        for(let j = 0; j<this.vertex; j++){
            if(!visited[j])
            {
                this.graphUtil(j,visited);
                count++;
                console.log();
            }
        }
        console.log("The total connected components are" +count);
    }
}

const g = new Graph(5);

g.addEdge(1, 0);
g.addEdge(2, 3);
g.addEdge(3, 4);
g.connectedGraph();