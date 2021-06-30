function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
 let sNum1 = String(num1);
 let sNum2 = String(num2);
 let freqCounter1 = {};
 let freqCounter2 = {};
 if(sNum1.length !== sNum2.length) {
     return false;
 }
 // Loop through string and form frequCounter for both
 for(let char of sNum1){
     freqCounter1[char] = (freqCounter1[char] || 0) + 1;
 }
  for(let char of sNum2){
     freqCounter2[char] = (freqCounter2[char] || 0) + 1;
 } 
 for(let key in freqCounter1) {
   if(freqCounter1[key] !== freqCounter2[key]) {
     return false
   }
 } 
  return true;
}

sameFrequency(81432, 18341);