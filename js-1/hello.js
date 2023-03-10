// escribe la función hola acá
function hola(saludo){
  return `Hola + ${saludo ? saludo : '!'}`;
}
// código de prueba
console.log(hola("Pedro")) // "Hola Pedro!"
console.log(hola("Juan")) // "Hola Juan!"
console.log(hola("")) // "Hola !"
