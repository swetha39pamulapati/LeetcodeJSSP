var maxProfit = function(prices){
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (minPrice > prices[i]) {
            minPrice = prices[i];
        }
        else {
            maxProfit = Math.max(maxProfit,prices[i] - minPrice);
        }
    }

    return maxProfit;
}
let prices =[7,1,5,3,6,4];
let data = maxProfit(prices);
console.log(data);