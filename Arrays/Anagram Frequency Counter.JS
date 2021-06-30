function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  if(!str1 && !str2){
    return true
  }
  if(str1.length !== str2.length) {
      return false;
  }
  
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  /**
   * Loop through the first array and then the second array. Get the frequency count of each unique letter
   * Do the same for the second
   * In the third loop compare if the counts are same
   * **/
   for(let key of str1){
       frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1 
   }
      for(let key of str2){
       frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1 
   }
  //  console.log(frequencyCounter1, frequencyCounter2)
  let valid = true;
  for(let key in frequencyCounter1) {
    //console.log(frequencyCounter1[key],frequencyCounter2[key])
    if(frequencyCounter1[key] !== frequencyCounter2[key] ) {
      return false
    } 
  }
  return true
}


// validAnagram('', '');
validAnagram('anagram', 'anagram');
validAnagram('rat', 'car');
validAnagram('awesome', 'awesom');
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana');
validAnagram('qwerty', 'qeywrt');
validAnagram('texttwisttime', 'timetwisttext');

















