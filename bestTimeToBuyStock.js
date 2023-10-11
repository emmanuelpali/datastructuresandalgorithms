// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

let maxProfit = (prices) => {
    let min_price = prices[0];
    let max_profit = 0;

    for(let price of prices){
        if(price < min_price){
            min_price = price
        }
        else {
            max_profit = Math.max(max_profit, price - min_price)
        }
    }
    return max_profit
};

console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,10]));
