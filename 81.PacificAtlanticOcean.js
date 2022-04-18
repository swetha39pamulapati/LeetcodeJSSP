let PacificAtlantic = function(heights) {
    let result = [];
    if (heights.length === 0 || heights === null)
        return result;

    let m = heights.length, n = heights[0].length;
    let atlantic = new Array(heights.length).fill(false).map(row => new Array(heights[0].length).fill(false));
    let pacific = new Array(heights.length).fill(false).map(row => new Array(heights[0].length).fill(false));

    for (let row = 0; row < m; row++)
    {
        DFS(row, 0, heights, pacific, heights[row][0]);
        DFS(row, n - 1, heights, atlantic, heights[row][n - 1]);
    }

    for (let  col = 0; col < n; col++)
    {
        DFS(0, col, heights, pacific, heights[0][col]);
        DFS(m - 1, col, heights, atlantic, heights[m - 1][col]);
    }

    for (let i = 0; i < heights.length; i++){
        for (let j = 0; j < heights[0].length; j++){
            if (atlantic[i][j] && pacific[i][j]){
                result.push([i,j])
            }
        }
    }
    return result;
}

function DFS( row, col,matrix, reach, prev){
    let m = matrix.length, n = matrix[0].length;

    if (row < 0 || row >= m || col < 0 || col >= n  || matrix[row][col] < prev)
        return;
    if (reach[row][col] === true)
        return
    reach[row][col] = true;
    DFS( row+1,col,matrix,reach,matrix[row][col])
    DFS( row-1,col,matrix,reach,matrix[row][col])
    DFS( row,col+1,matrix,reach,matrix[row][col])
    DFS( row, col-1,matrix,reach,matrix[row][col])
}

let  heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];
console.log(PacificAtlantic(heights));