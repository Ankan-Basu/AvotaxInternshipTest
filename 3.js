/** ANKAN BASU */

function numberOfBinaryTreeTopologies(n) {
  /**
   * no_of_binTree_topologies = factorial(2n)/((factorial(n+1))*(factorial(n)))
   * 
   * we are calculating n!, (n+1)!, (2n)!, we can optimize the code
   * by first calculating n!, storing the result in a variable and 
   * then calculating (n+1)! using that result, instead of calculating
   * from beginning. similarly we can store the result of (n+1)! 
   * and calculate (2n)! after that. The below factorial function
   * implements this process.
   */
  let lastCalcFact = 1;
  let lastCalcRes = 1;
  const factorial = (x) => {
    if (x===0) return 1;
    let res = lastCalcRes;
    for (let i=lastCalcFact+1; i<=x; i++) {
      res *= i;
    }
    lastCalcFact = x;
    lastCalcRes = res;
    return res;
  }

  let a = factorial(n);
  let b = factorial(n+1);
  let c = factorial(2*n);
  let finalRes = c/(a*b);
  return finalRes;
}

exports.numberOfBinaryTreeTopologies = numberOfBinaryTreeTopologies;