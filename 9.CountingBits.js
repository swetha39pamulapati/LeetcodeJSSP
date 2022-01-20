var countingBits = function(n){
   let arr = new Array(n+1);
   arr[0] = 0;
   for(let i = 1; i<=n; i++){
if(i%2 ==1){
    arr[i] = arr[i-1]+1;
}
else
    arr[i] = arr[i/2];
   }
   return arr;
}


let data = countingBits(5);
console.log(data);