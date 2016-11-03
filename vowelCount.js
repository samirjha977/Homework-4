function vowelCount(a) {
  var lower = a.toLowerCase();
  var arr = lower.split('');
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u') {
      count++;
    }
  }
  return count;
}
console.log(vowelCount('Hello, World!')); //3
console.log(vowelCount('abracadabra')); //5
console.log(vowelCount('Javascript is great!')); //6
console.log(vowelCount('wRjuUJvJxbnyTB3?sCLAp2mbGL3xe8')); //4
console.log(vowelCount('A')); //1
