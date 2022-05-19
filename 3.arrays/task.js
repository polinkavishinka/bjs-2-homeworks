function compareArrays(arr1, arr2) {
  let result;
  result =  arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
  
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter((n) => n % 3 === 0 ).filter((n) => n > 0).map((n) => n*10);
 

  return resultArr; // array
}
