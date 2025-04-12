/**
 * @param {number[]} prices
 * @return {number}
 */
// 살때는 작게 사고 팔때는 비싸게팔아야함

var maxProfit = function(prices) {
    let min = 9999;
    let profit = 0;
    for(let i=0; i<prices.length; i++){
        if(min >= prices[i]){
        min = prices[i]
       
        }
         profit = Math.max(profit, prices[i]-min)
     
    }
    return profit
};