function binaryArrayToNumber(a,b) {
  return a[1];
  // var binary = a[1];
  //var join = binary.join('');
  //return parseInt(join,2)
}
console.log(binaryArrayToNumber([0, 0, 0, 1]), 1); // 1
console.log(binaryArrayToNumber([0, 0, 1, 0]), 2); // 2
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15); // 15
console.log(binaryArrayToNumber([0, 1, 1, 0]), 6); // 6
  
