let findMinArrowShots = function(points) {
    if(points == null || points.length == 0)
        return 0;
    points.sort((a, b) => a[1] - b[1]);
    let end = points[0][1], cnt = 1;
    for(let i = 1; i < points.length; i++)
    {
        if(end >= points[i][0])
            continue;

        cnt++;
        end = points[i][1];
    }

    return cnt;
};
let pts = [[10,16],[2,8],[1,6],[7,12]];
console.log(findMinArrowShots(pts))