var maxProfit = function(prices){
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (minPrice > prices[i]) {
            minPrice = prices[i];
        }
        else if ((prices[i] - minPrice) > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
}
let prices =[7,6,4,3,1];
let data = maxProfit(prices);
console.log(data);