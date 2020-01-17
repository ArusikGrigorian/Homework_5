EX4

var newarr = [];
function moveleft(arr, n){
newarr = newarr.concat(arr.splice(0,1));
if(arr.length-n){
  return moveleft(arr, n+1);
}
  return arr.concat(newarr);
}

console.log(moveleft(["a", "b", "c", "d", "e", "f", "g", "h"], 3))



var newarr = [];
function moveleft(arr, n){
newarr = newarr.concat(arr.splice(0,1))
if(arr.length-n){
 return moveleft(arr, -n)
}
  return arr.concat(newarr)
}

console.log(moveleft(["a", "b", "c", "d", "e", "f", "g", "h"], -2))
