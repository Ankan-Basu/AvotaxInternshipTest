/** ANKAN BASU */

/** Bottom Up Approach (Tabulation) */

function maxProfitWithKTransactions(prices, k) {
  /**   Declaring a 3D array (prices.length+1 * 2 * k+1)
    *   for tabulation. The array is filled with 0.
    */
  const dp = new Array(prices.length+1).fill(0).map(
      () => {
          return new Array(2).fill(0).map(
              () => {
                  return new Array(k+1).fill(0);
              }
          );
      }
  );

  /** Base cases */
  /**
   *  for transacLeft === 0, all cells in the dp array = 0
   *  for indx === prices.length, all cells in the dp array = 0
   *  The dp array has already been filled with 0. So no need 
   *  to seperately fill in these base cases.
   */

  for (let indx=prices.length-1; indx>=0; indx--) {
      for (let canBuy=0; canBuy<2; canBuy++) {
          for (let transacLeft=1; transacLeft<=k; transacLeft++) {
              if (canBuy) {
                  let profit = Math.max(-prices[indx] + dp[indx+1][0][transacLeft],
                      0 + dp[indx+1][1][transacLeft]);
                  dp[indx][canBuy][transacLeft] = profit;
              } else {
                  let profit = Math.max(prices[indx] + dp[indx+1][1][transacLeft-1],
                      0 + dp[indx+1][0][transacLeft]);
                  dp[indx][canBuy][transacLeft] = profit;
              }
          }
      }
  }
  return dp[0][1][k];      
};

exports.maxProfitWithKTransactions = maxProfitWithKTransactions;