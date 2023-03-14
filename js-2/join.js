const join = (list) => {
  let string = '';
  list.forEach(element => {
    string += ' ' + element
  });
  return string;
}
console.log(join(['hello', 'como', 'estas?']));
console.log(join(['La suma', 'de', '3 + 7 es:', 10]));
