let maxProfit = function(prices) {
    if (prices.length < 2)
        return 0;

    let hold  = new Array(prices.length);
    let cash = new Array(prices.length);

    hold[0] = -prices[0];
    cash[0] = 0;

    for (let i = 1; i < prices.length; i++)
    {
        hold[i] = Math.max(hold[i - 1], i > 1 ? cash[i - 2] - prices[i] : -prices[i]);
        cash[i] = Math.max(cash[i - 1], hold[i - 1] + prices[i]);
    }
    return cash[prices.length - 1];

};
let prices = [1,2,3,0,2];
console.log(maxProfit(prices))