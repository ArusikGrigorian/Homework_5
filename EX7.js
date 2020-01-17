EX7

var n = 15;
var k="";
for(var i = 0; i<n; i++){
      k="";
  for(var j=0; j<n; j++){
    if((i===0 || j===0) || (i===j || i+j===n-1) || (i===n-1 || j===n-1)){
      k+=" * ";
    }
    else {
      k+="   ";
    }
  }
  console.log(k);
}