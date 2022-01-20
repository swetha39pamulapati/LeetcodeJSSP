function binarySearch(nums, target){
    let l = 0, r = nums.length-1;
    while(l<= r){
        let mid  = Math.floor((l + r) / 2);
        if(nums[mid] == target)
            return mid;
         if(nums[mid]<target)
            l = mid+1;
        else
            r = mid-1;

    }
   return -1; console.log("value not found in array");
}
let arr = [0,6,11,12,15,17];
let data = binarySearch(arr,19);
console.log(data == -1? "value not found in array" : "value was found at index  "+data);