EX 1

function delfirst(arr, i){
    if (i == arr.length - 1) {
        arr.pop();
        return arr;
    }
    arr[i] = arr[i + 1];
    i++;
    return delfirst(arr, i);
}
console.log(delfirst([6, 78, "n", 0, 1], 0));

