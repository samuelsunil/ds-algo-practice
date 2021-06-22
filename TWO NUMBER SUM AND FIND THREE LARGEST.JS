function twoNumberSum(array, targetSum) {
  // Write your code here.
  if (array.length < 2) {
    return [];
  }
  const abs = {}
//   for(var i = 0; i < array.length; i++) {
//     abs[array[i]] = true;
//   }
  for (var i = 0; i < array.length; i++) {
    abs[array[i]] = true;
    const difference = targetSum - array[i];
    if(abs[difference] && difference !== array[i]) {
       return [array[i], difference];
    }
    
  }
  	return [];
}

//twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);


function threeNumberSum(array, sum) {
	const sortedArray = array.sort((a, b) => a - b);
//  console.log(array)
  const finalResult = [];
  for(let i = 0;i < array.length - 1;i++) {
   let currentNumber = array[i];
    let left = i+1;
    let right = array.length - 1;
    while(left < right) {
     let arraySum = currentNumber + array[left] + array[right];
      //console.log(arraySum)
      if(arraySum === sum) {
        finalResult.push([currentNumber ,array[left] , array[right]]);
        right--;
        left++;
       } else if( arraySum < sum) {
         left++
       } else if( arraySum > sum) {
         right--;
       } 
    }
  }
return finalResult;
  // Write your code here.
}

threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)



