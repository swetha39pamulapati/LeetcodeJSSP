let peakIndexInMountainArray = function(arr) {
    let left = 0, right = arr.length-1;
    while(left<=right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid]<arr[mid+1])
            left = mid+1;
        else
            right = mid-1;

    }
    return left;
};

let arr =  [0,10,15,17,5,2];
console.log(peakIndexInMountainArray(arr));