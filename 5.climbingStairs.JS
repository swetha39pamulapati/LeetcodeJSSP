var climbStairs = function(n){
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (minPrice > prices[i]) {
            minPrice = prices[i];
        }
        else  {
            maxProfit = Math.max(maxProfit,prices[i]-minPrice);
        }
    }

    return maxProfit;
}

let data = climbStairs(5);
console.log(data);