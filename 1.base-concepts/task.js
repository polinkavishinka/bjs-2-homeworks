
// код для задачи №1 писать здесь
function solveEquation(a, b, c) {
  "use strict";
  // (ax^2+bx+c = 0 )
  let arr = [];
  let d = Math.pow(b,2) - 4*a*c;
  if (d === 0){
     arr[0] = (-b + Math.sqrt(d)) / 2*a;
     console.log(`Корень равен ${arr[0]}`);
  }  else if (d > 0)
  {
     arr[0] = (-b + Math.sqrt(d)) / 2*a;
     arr[1] = (-b - Math.sqrt(d)) / 2*a;
     console.log (`Корни равны: ${arr[0]}, ${arr[1]}`);
  } else  
  {
     console.log('Корней нет');
  }
  return arr;
};
solveEquation ( 1, 6, 3);

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
