var missingNumber = function(arr){
    let n = arr.length;
    let sum = 0;
    let missedNumber;
    let sumN = (n * (n+1)) / 2;
    for(let i = 0; i<n; i++){
       sum += arr[i];
    }
    return sumN-sum;
}

let arr =[0,1,3,4,5];
let data = missingNumber(arr);
console.log(data);