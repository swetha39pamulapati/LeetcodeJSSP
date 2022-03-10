let uniquePaths = function(m, n) {
    let dp = new Array(m).fill(new Array(n));
    for (let i = 0; i<dp.length; i++)
    {
        dp[i][0] = 1;
    }
    for (let j = 0; j < dp[0].length; j++)
    {
        dp[0][j] = 1;
    }
    for(let i = 1; i<dp.length; i++)
    {
        for(let j = 1; j<dp[0].length; j++)
        {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};
console.log(uniquePaths(3,7));
