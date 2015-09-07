// console.log(process.argv);

var arr = process.argv.slice(2);
console.log(arr.reduce(function(sum, cur) { return sum + Number(cur)}, 0))
