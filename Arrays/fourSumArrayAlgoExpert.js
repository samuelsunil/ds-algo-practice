function fourSum(array, targetSum) {
  const result = [];
  const obj = {}
  
  for(let outerIdx=0;outerIdx<array.length;outerIdx++){
    for(let j=outerIdx+1;j<array.length;j++) {
      
      const tempSum = array[j] + array[outerIdx];
      const difference = targetSum - tempSum;
      if(obj[difference]) {
        
       obj[difference].forEach((comboArr) => {
         result.push([...comboArr,array[j], array[outerIdx]])
       })
        
      }
    }
       for(let k =outerIdx-1; k>=0;k--){
          const tempSum = array[outerIdx] + array[k];
         if(obj[tempSum]) {
           obj[tempSum].push([array[outerIdx], array[k]])
         } else {
           obj[tempSum] = [[array[outerIdx], array[k]]]
         }
        }
   
  }
 return result
}


// fourSum([7,6,4,-1,1,2, 3], 16);


function outOfOrderNumberArray(i, num, array){
  if(i===0)
    return num > array[i+1];
  else if (i===array.length-1) 
    return num < array[i-1];
  else  
    return num < array[i-1] || num > array[i+1];
}
function subArraySort(array) {
  
  /*
  find the smallest and largest OUTN OF ORDER.
  OUT OF ORDER IS THE NUMBER THAT IS OUT OF ORDER ON BOTH SIDES
  if no largest and smalled, the return -1, -1
  esle, in one pass find the first and lasgt when smallest greater than
  
  */
  const obj = {}
  let smallest = Infinity
  let largest = -Infinity
  for(let firstIdx=0;firstIdx<array.length-1;firstIdx++) {
    const num = array[firstIdx];
    if(outOfOrderNumberArray(firstIdx, num, array )) {
      smallest = Math.min.apply(Math, [num, smallest]);
       largest = Math.max.apply(Math, [num, largest]);
    }
  }
    if (smallest === Infinity){
    return [-1,-1];
  }

  let idxStart = 0
  let idxEnd = array.length -1;
  let minArray = 0
  let maxArray = array.length - 1;
while(smallest >= array[idxStart]) {
 idxStart++;
}
  while(largest <= array[idxEnd]) {
    idxEnd--
  }
 return [idxStart,idxEnd]
}

//subArraySort([1,2,4,7,10,11,7,12,6,7,16,18,19]);
//subArraySort([1,2,4,7,10]);
subArraySort([2,1]);