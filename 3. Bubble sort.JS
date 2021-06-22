function bubbleSort(array) {
  
  for(let i=array.length; i > 0;i--){
    for(let j=0; j< i-1; j++) {
      if(array[j] >array[j+1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp
      }
    }
  }
  console.log(array)
}

//bubbleSort([37,45,29,8])


const swap = (arr, idx1, idx2) => {
  [arr[idx2], arr[idx1]] = [arr[idx1], arr[idx2]];
}

function selectionSort(arr) {
  
  let minIdx = Infinity
  for(let i = 0; i < arr.length; i++){
      minIdx = i;
      //console.log(minimum);
    let currentMinIdx = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[minIdx]) {
        console.log(arr[currentMinIdx], arr[j]);
        currentMinIdx = j;
      }
      swap(arr, i,currentMinIdx );
//       let temp = arr[i]
//       arr[i] = arr[currentMinIdx];
//       arr[currentMinIdx] = temp;
    }
  }
    console.log(arr)
}


//selectionSort([37,45,29,8])


function insertionSort(arr) {
   
  for (let i = 1;i < arr.length; i++) {
     let currentVal = arr[i];
    console.log('currentVal',currentVal );
    for(var j = i -1; j >= 0 && arr[j] > currentVal ; j--){
        arr[j+1] = arr[j];
        console.log(arr)
  
    }
    arr[j+1] = currentVal; 
    console.log("________", arr)
  }
  return arr
}

//insertionSort([2,1,9,76,4])




function moveNumberToRight(arr, integer) {
  
  let i = 0
  let j = arr.length - 1;
  while(i<j) {
    while(arr[j] === integer ) {
      j -= 1;
    }
    if(arr[i] === integer) {
      swap(arr, i, j);
    }
    i += 1; 
  }
  return arr;
}
moveNumberToRight([2,1,2,2,2,3,4,2 ], 2)





