// Sliding window - maxSubArraySum
/*
  maxSubarraySum([1,2,4,2,8,1,5], 2)  // 10
  maxSubarraySum([1,2,4,2,8,1,5], 4)  // 16
  maxSubarraySum([], 4)   //null
*/

function maxSubarraySum(array, num) {
  let maxSum = 0
  let tempSum = 0
  if(array.length < num) {
    return null;
  }
   for(let i = 0; i < num;i++) {
    maxSum += array[i];
  }
  //console.log(maxSum)
  // Loop through array
  tempSum = maxSum;
  for(let i=num;i<array.length; i++) { // TO NOTE
    tempSum = tempSum - array[i-num] + array[i];
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum;
}

maxSubarraySum([1,2,4,2,8,1,5], 4) 
 maxSubarraySum([1,2,4,2,8,1,5], 2)