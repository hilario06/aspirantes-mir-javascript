const maxIndex = (list) => {
  if (!list.length) return -1;
  let indexMax = 0;
  list.forEach((element, index) => {
    if(element > list[indexMax])
    indexMax = index;
  });
  return indexMax;
}
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1
