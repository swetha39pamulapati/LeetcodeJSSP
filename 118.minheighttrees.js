var findMinHeightTrees = function(n, edges) {
let res = [];
    if (n < 2)
    {
        for (let i = 0; i < n; i++)
        res.push(i);
    }
    let graph = new Set();
    for (let i = 0; i < n; i++)
    graph[i] = new Set();
    for (const [e, v] of edges) {
        graph[v].add(e);
        graph[e].add(v);
    }
    let queue = [];
    for (let i = 0; i < n; i++)
    {
        if (graph[i].size == 1)
            queue.push(i);
    }
    while (n > 2)
    {
        let size = queue.length;
        n -= size;
        for (let i = 0; i < size; i++)
        {
            let curr = queue.shift();
                for (const next of graph[curr].values()) {
                    graph[next].delete(curr);
                    if (graph[next].size == 1)
                        queue.push(next);
                }

        }
    }
    while (queue.length > 0)
        res.push(queue.shift());

    return res;
    };
let numCourses = 6, prerequisites = [[3,0],[3,1],[3,2],[3,4],[5,4]];
var result = findMinHeightTrees(numCourses,prerequisites);
console.log(result.length);