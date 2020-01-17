EX3

function getsum(num){
num = num.toString().split("").map(Number).reduce(function(a, b) {
  return a + b;
})
  if(num>9){
  return getsum(num);
  }
  return num;
}
console.log(getsum(14)); // 29, 999999999999

