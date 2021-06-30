// Multiple Poiinters Pattern

/*
* Write a Function sumZero which accepts a sorted array of integers. THe function should find the first pair where the sum is 0. Return an array that includes both the values that sum to zero or undefined if a pair does not exist
 sumZero([-3, -2, -1, 0, 1, 2, 3])  // [-3, 3]
 sumZero([-2, 0 , 1, 2]) // undefined
 
 IMP: THis method applied only if the array is sorted
 * */

function sumZero(array) {
  // get the left and right pointers
  // while the left < right - check for the sum. if the sum >  0, then decrease right else increase left
  
  let left = 0
  let right = array.length - 1
  while(left < right) {
    let sum = array[left] + array[right]
    if( sum === 0) {
      return [array[left], array[right]]
    } else if(sum > 0) {
      right -= 1
    } else if(sum < 0) {
      left += 1
    }
  }
}



sumZero([-3, -2, -1, 0, 1, 2, 3])
sumZero([-2, 0 , 1, 3])