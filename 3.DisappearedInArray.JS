
var disappearedInArray = function(arr){
    let n = arr.length;
    let nums = [];
    let data = [];
    for(let i = 0;i<n; i++){
        if(!nums.includes(arr[i]))
            nums.push(arr[i]);
    }
    for(let j =1; j<n+1; j++) {
        if (!nums.includes(j))
            data.push(j);
    }
    return data;
}

let arr =[2, 3, 4, 5, 7, 8, 2, 3];
let data = disappearedInArray(arr);
console.log(data);