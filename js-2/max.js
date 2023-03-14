const max = (list) => {
  if(!list.length) return undefined;
  let maximumNumber = list[0];
  list.forEach(element => {
    if(maximumNumber < element){
      maximumNumber = element
    }
  });
  return maximumNumber;
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined
