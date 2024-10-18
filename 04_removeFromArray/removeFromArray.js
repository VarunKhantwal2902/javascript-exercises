const removeFromArray = function(arr, ...rmArgs) {
  newArr = new Array();
  outer: for(const element of arr){
    for(const removeElement of rmArgs){
      if(element === removeElement) continue outer;
    }
    newArr.push(element);
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
