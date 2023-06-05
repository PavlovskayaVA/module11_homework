let sumEven = 0;
let sumOdd = 0;
let sumZero = 0;
const arr = [2, 7, 'mouse', 0, 33, '', null, 'sun', 6, 99, 77];

function getSum() {
  for (i = 0; i < arr.length; i++) {
    if(isNaN( arr[i] ) == false && arr[i] != 0 && arr[i] != null) {
      if(arr[i]%2 == 0) {
        sumEven++;       
      } else {
        sumOdd++;
      }
    } else if(arr[i] === 0) {
      sumZero++;
    }
  }
  console.log(`Количество четных значений: ${sumEven}`);
  console.log(`Количество нечетных значений: ${sumOdd}`);
  console.log(`Количество нулей: ${sumZero}`);
}

getSum();

