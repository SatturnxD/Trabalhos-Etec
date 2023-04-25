let num1 = 0;
let num2 = 1;
let fibo;

for (let i=2; i<15; i++) {

  fibo = num1 + num2;
  num1 = num2;
  num2 = fibo;

  document.write(fibo , " | ");
}