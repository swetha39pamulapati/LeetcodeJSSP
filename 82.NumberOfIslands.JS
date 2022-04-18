let numIslands = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++)
    {
        for (let j = 0; j < grid[i].length; j++)
        {
            if (grid[i][j] == '1')
            {
                count += 1;
                DFS(grid, i, j);
            }
        }
    }
    return count;
};
function DFS(grid,  i,  j)
{
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == '0')
        return;
    grid[i][j] = '0';
    DFS(grid, i + 1, j);
    DFS(grid, i - 1, j);
    DFS(grid, i, j - 1);
    DFS(grid, i, j + 1);
}
let grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];
console.log(numIslands(grid));