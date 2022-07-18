/** ANKAN BASU */

/** Optimized Tabulation Version */

/**
 * In Tabulation(previous solution), at a particular step
 * We just need the index indx and indx+1 of the dp array. 
 * So instead of storing whole 3D array where
 * indx goes from 0 to 'prices.length', we can just store 
 * the values at indx and indx+1 of dp array. So we keep two 
 * 2D arrays.'curr' stores the value of dp array at index 'indx'
 * 'nextDay' stores the value of dp array at index 'indx+1'
 */

function maxProfitWithKTransactions(prices, k) {
  /* Declaring the 2D arrays filled with 0 */
  let nextDay = new Array(2).fill(0).map(
            () => {
                return new Array(k+1).fill(0);
            }
        );
  
  let curr = new Array(2).fill(0).map(
            () => {
                return new Array(k+1).fill(0);
            }
        );

  /** Like the previous solution, here the base cases have 
   * already been filled with 0 while initialising the array
   */

  for (let indx=prices.length-1; indx>=0; indx--) {
    for (let canBuy=0; canBuy<2; canBuy++) {
        for (let transacLeft=1; transacLeft<=k; transacLeft++) {
            if (canBuy) {
                let profit = Math.max(-prices[indx] + nextDay[0][transacLeft],
                    0 + nextDay[1][transacLeft]);
                curr[canBuy][transacLeft] = profit;
            } else {
                let profit = Math.max(prices[indx] + nextDay[1][transacLeft-1],
                    0 + nextDay[0][transacLeft]);
                curr[canBuy][transacLeft] = profit;
            }
        }
    }
    nextDay = curr;
  }

  return curr[1][k];      
};

exports.maxProfitWithKTransactions = maxProfitWithKTransactions;