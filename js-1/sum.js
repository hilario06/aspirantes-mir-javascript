// escribe la función suma acá
const sum = (number) => {
  let totalAmount = 0;
  let index = 1;
  while(index <= number){
    totalAmount += index;
    index++;
  }
  return totalAmount;
}
// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120
