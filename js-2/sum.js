const sum = (list) => {
  return list.reduce((accumator, currentValue) => {
    return accumator + currentValue;
  }, 0);
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0
