/** ANKAN BASU */


/** Most Optimized Tabulation Version */
/** The less optimized ones are written 
 * after this one in comments. 
 * It is recommended to read Tabulation 
 * solution first, then this one
*/

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

  /** Like the tabulation solution, here the base cases have 
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





// /** Recursion Top Down Approach (Memoization) */

// function maxProfitWithKTransactions(prices, k) {
//   /*  Declaring a 3D array (prices.length * 2 * k+1)
//       for memoization. The array is filled with -1.
//   */
//   const memo = new Array(prices.length).fill(-1).map(
//       () => {
//           return new Array(2).fill(-1).map(
//               () => {
//                   return new Array(k+1).fill(-1);
//               }
//           );
//       }
//   );
  
//   /*canBuy=== 1 means the stock can be bought now
//       canBuy === 0 means a stock cannot be bought now
//       because a previously bought stock has not yet been sold.
//   */
//   const findProfit = (indx, canBuy, transacLeft) => {
//       if (indx === prices.length || transacLeft === 0) return 0;
//       if (memo[indx][canBuy][transacLeft] !== -1) return memo[indx][canBuy][transacLeft];
      
//       if (canBuy) {
//           let profit = Math.max(-prices[indx] + findProfit(indx+1, 0, transacLeft),
//               0 + findProfit(indx+1, 1, transacLeft));
//           memo[indx][canBuy][transacLeft] = profit;
//           return profit;
//       } else {
//           let profit = Math.max(prices[indx] + findProfit(indx+1, 1, transacLeft-1),
//               0 + findProfit(indx+1, 0, transacLeft));
//           memo[indx][canBuy][transacLeft] = profit;
//           return profit;
//       }
//   }
//   return findProfit(0, 1, k);
// };



// /** Bottom Up Approach (Tabulation) */

// function maxProfitWithKTransactions(prices, k) {
//   /**   Declaring a 3D array (prices.length+1 * 2 * k+1)
//     *   for tabulation. The array is filled with 0.
//     */
//   const dp = new Array(prices.length+1).fill(0).map(
//       () => {
//           return new Array(2).fill(0).map(
//               () => {
//                   return new Array(k+1).fill(0);
//               }
//           );
//       }
//   );

//   /** Base cases */
//   /**
//    *  for transacLeft === 0, all cells in the dp array = 0
//    *  for indx === prices.length, all cells in the dp array = 0
//    *  The dp array has already been filled with 0. So no need 
//    *  to seperately fill in these base cases.
//    */

//   for (let indx=prices.length-1; indx>=0; indx--) {
//       for (let canBuy=0; canBuy<2; canBuy++) {
//           for (let transacLeft=1; transacLeft<=k; transacLeft++) {
//               if (canBuy) {
//                   let profit = Math.max(-prices[indx] + dp[indx+1][0][transacLeft],
//                       0 + dp[indx+1][1][transacLeft]);
//                   dp[indx][canBuy][transacLeft] = profit;
//               } else {
//                   let profit = Math.max(prices[indx] + dp[indx+1][1][transacLeft-1],
//                       0 + dp[indx+1][0][transacLeft]);
//                   dp[indx][canBuy][transacLeft] = profit;
//               }
//           }
//       }
//   }
//   return dp[0][1][k];      
// };