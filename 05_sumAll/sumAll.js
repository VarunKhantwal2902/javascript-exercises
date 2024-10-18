const sumAll = function(low, high) {
  if( typeof low !== 'number' || typeof high !== 'number') return "ERROR";
  
  if(low < 0 || high < 0) return "ERROR";
  if(Math.floor(low) !== low) return "ERROR";
  if(Math.floor(high) !== high) return "ERROR";


  if(high < low){
    let temp = low;
    low = high;
    high = temp;
  }
  let result = low;

  for(let i = low + 1; i<=high; i++){
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
