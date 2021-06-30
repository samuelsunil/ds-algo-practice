
// FREQUENCY COUNTER PATTERN OF ALGORITHMS
// given 2 arrays, find if the second array is the square of the items in the first array and their frequency should also be the same.
// Example: same([1,2,3,4], [9,4,1,16]) returns true
//         same([1,2,2,4], [1,16,4,4]) returns true
//          same([1,2,2,4], [1,16,4]) returns false

function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for(let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
    for(let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for(var key in frequencyCounter1) {
    // if the square of the key is not in the second counter . return false
    if( !(key ** 2 in frequencyCounter2)){
      return false;
    }
     if((frequencyCounter1[key] !== frequencyCounter2[key ** 2])) {
       return false;
     }
  }
  return true;
}

same([1,2,2,4], [1,14,4,2])