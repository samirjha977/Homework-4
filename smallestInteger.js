function smallestInteger(arr) {
return Math.min.apply( null, arr );
}

console.log(smallestInteger([34, 15, 88, 2])); // 2
console.log(smallestInteger([34, -345, -1, 100])); // -345
