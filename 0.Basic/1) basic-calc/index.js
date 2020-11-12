function basicCalc(operation, a, b) {
  // Напиши свой код здесь
  switch(operation) {
    case '+':
      return a + b;
    case '-':
      return  a - b;
    case '/':
      return  a / b;
    case '*':
      return  a * b;
  }
}
window.basicCalc = basicCalc;
export default basicCalc;