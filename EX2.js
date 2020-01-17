EX2

function getarr(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            a = getarr(arr[i]);
            newArr = newArr.concat(a);
           
        }
        else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(getarr([1, [3, 4, [1, 2]], 10])); // [14, [1, [[[3, []]], 1], 0]
