let topKFrequent = function(nums, k) {
    let map = new Map();
    for(let v of nums) {
        if(!map.has(v)) {
            map.set(v, 1);
        } else {
            map.set(v, map.get(v) + 1);
        }
    }

    let array = [];
    for(let [key, value] of map) {
        array.push([key, value]);
    }
    array.sort(function(a,b) {
        return b[1] - a[1];
    })
    let result = [];
    for(let i = 0; i < k; i++) {
        result.push(array[i][0]);
    }
    return result;
};
let nums = [1,1,1,2,2,3], k = 2;
console.log(topKFrequent(nums,k));