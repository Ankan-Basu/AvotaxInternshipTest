/** ANKAN BASU */

/** Recursion Top Down Approach (Memoization) */

function maxProfitWithKTransactions(prices, k) {
    /*  Declaring a 3D array (prices.length * 2 * k+1)
        for memoization. The array is filled with -1.
    */
    const memo = new Array(prices.length).fill(-1).map(
        () => {
            return new Array(2).fill(-1).map(
                () => {
                    return new Array(k+1).fill(-1);
                }
            );
        }
    );
    
    /*canBuy=== 1 means the stock can be bought now
        canBuy === 0 means a stock cannot be bought now
        because a previously bought stock has not yet been sold.
    */
    const findProfit = (indx, canBuy, transacLeft) => {
        if (indx === prices.length || transacLeft === 0) return 0;
        if (memo[indx][canBuy][transacLeft] !== -1) return memo[indx][canBuy][transacLeft];
        
        if (canBuy) {
            let profit = Math.max(-prices[indx] + findProfit(indx+1, 0, transacLeft),
                0 + findProfit(indx+1, 1, transacLeft));
            memo[indx][canBuy][transacLeft] = profit;
            return profit;
        } else {
            let profit = Math.max(prices[indx] + findProfit(indx+1, 1, transacLeft-1),
                0 + findProfit(indx+1, 0, transacLeft));
            memo[indx][canBuy][transacLeft] = profit;
            return profit;
        }
    }
    return findProfit(0, 1, k);
};

exports.maxProfitWithKTransactions = maxProfitWithKTransactions;