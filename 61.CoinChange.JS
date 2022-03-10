let coinChange = function(coins, amount) {
    let dp = recurse(coins,amount,0);
    return dp[amount]<= amount ? dp[amount] :-1;
};
function recurse(coins,amount,Index){
    if(coins == null || coins.length<=Index){
        let dp = new Array(amount +1);
        dp.fill(amount+1);
        dp[0] = 0;
        return dp;
    }
    else
    {
        let dp = recurse(coins,amount,Index+1);
        let coin = coins[Index];
        for(let i = coin; i<dp.length; i++){
            dp[i] = Math.min(dp[i],1+dp[i-coin]);
        }
        return dp;
    }

}
let coins = [1,2,5], amount = 11;
console.log(coinChange(coins,amount))