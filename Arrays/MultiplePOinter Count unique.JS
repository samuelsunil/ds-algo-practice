function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
    if(!arr) {
      return;
  }
  if(arr && arr.length === 0) {
      return 0
  }

  let ptr1 = 0
  let ptr2 = 1
  while (ptr2 < arr.length) {
      // if the ptrs are equal we move ptr2 ahead
      // ptrs are not equal, we move i ahead and replace the value in i with j
      if(arr[ptr1] === arr[ptr2]) {
          ptr2++
      } else {
          ptr1++;
          arr[ptr1] = arr[ptr2]
      }
  }
  return ptr1 + 1;
}

countUniqueValues([1,1,1,2,3,4,4,5,6,7,9])