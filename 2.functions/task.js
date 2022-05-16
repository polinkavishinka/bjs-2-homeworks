// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  avg = 0;
  //let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min ) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }
   avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}
console.log(getArrayParams([-99, 99, 10]));


// Задание 2

//Напишите функцию worker которая должна находить сумму элементов массива и возвращать её.
function worker(arr) {
  let sum = 0;
  for ( let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for ( let i = 0; i < arrOfArr.length; i++){
       let sumArr= func(arrOfArr[i]);

    if (sumArr > max){
      max = sumArr;
    }
  } 
  return max;
}



// Задание 3
function worker2(arr) {

  let min = Infinity;
  let max = -Infinity;
  let dif;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min ) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  dif = Math.abs(min - max);
  return dif;
}