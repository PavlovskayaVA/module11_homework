function sum(num) {
    let numOne = num();
    return function() {
      let numTwo = +prompt('Введите число:');
      console.log(`${numTwo} + ${numOne} = ${numTwo + numOne}`);
    }
  }
  
  function num() {
    let number = +prompt('Введите число:');
    return number;
  }
  
  const resultSum = sum(num);
  
  resultSum();