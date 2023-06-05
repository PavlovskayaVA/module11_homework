let a = 0;
let b = 0;

function num(a, b) {
  while (a <= b)
    {
      console.log(a);
      a++;
    }
}

const idInterval = setInterval(num, 1000, 3, 6);

setTimeout(function() {
  clearInterval(idInterval)
}, 5000);