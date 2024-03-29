let canFinish = function (numCourses, prerequisites) {
    const adj = new Map();
    for(let i = 0; i<numCourses; i++)
    {
        adj[i] = new Map();
    }
    const indegree = Array(numCourses).fill(0);
    for (const [e, v] of prerequisites) {
        if (adj.has(v)) {
            adj.get(v).push(e);
        } else {
            adj.set(v, [e]);
        }
        indegree[e]++;
    }
    let q = [];
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] == 0)
            q.push(i);
    }
    let cnt = 0;
    while (q.length!=0)
    {
        let u = q.shift();
        if (adj.has(u)) {
            for (const itr of adj.get(u)) {
                if (--indegree[itr] == 0)
                    q.push(itr);
            }

        }
        cnt++;
    }
    if (cnt != numCourses) {
        return false;
    }
    else
        return true;
};

let numCourses = 2, prerequisites = [[1,0]];
console.log(canFinish(numCourses,prerequisites));
