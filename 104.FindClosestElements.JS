let findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length-k;
    while(left< right){
        let mid = Math.floor(left +(right-left)/2);
        if(x-arr[mid]> arr[mid+k]-x){
            left = mid+1;
        }
        else
            right = mid;
    }
    let result = [];

    for(let i = left; i< (left+k); i++)
        result.push(arr[i]);

    return result;
};
arr = [1,2,3,4,5], k = 4, x = 3
console.log(findClosestElements(arr, k, x));