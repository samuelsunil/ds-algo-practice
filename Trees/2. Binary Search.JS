function binarySearch(array, searchValue) {
  let first = 0
  let last = array.length - 1;
  let middle = Math.floor((first + last) / 2);
  while(array[middle] !== searchValue && first <= last) {
    if(array[middle] < searchValue ) {
      first = middle + 1;
      middle = Math.floor((first + last) / 2);
    } else if(array[middle] > searchValue) {
      last = middle - 1 ;
      middle = Math.floor((first + last) / 2);
    }  
  }
  
  if(array[middle] === searchValue) {
     // console.log(middle);
      return middle;
    } else {
      return -1;
    }
}

binarySearch([1,2,34, 43,45,56,59,60], 3);

  