function getAverage(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return Math.floor(count/(arr.length));
}
console.log(getAverage([2,2,2,2])); //2
console.log(getAverage([1,2,3,4,5,])); //3
console.log(getAverage([1,1,1,1,1,1,1,2])); //1
