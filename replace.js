function replace(a) {
  var lower = a.toLowerCase();
  var arr = lower.split('');

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u') {
      arr.splice(i,1,'!');
    }
  }
return (arr.join('').toUpperCase());
}
console.log(replace('Hi!')) //'H!!'
console.log(replace('!Hi! Hi!')) // '!H!! H!!'
console.log(replace('aeiou')) // '!!!!!'
console.log(replace('ABCDE')) //'!BCD!'
