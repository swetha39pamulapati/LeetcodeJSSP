var maxProfit = function(prices) {
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if ( prices[i] < minPrice) {
            minPrice = prices[i];
        }
        else  {
            maxProfit = Math.max(maxProfit,prices[i]-minPrice);
        }
    }

    return maxProfit;
};
let prices =[7,1,5,3,6,4];
let data = maxProfit(prices);
console.log(data);