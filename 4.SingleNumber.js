var singleNumber = function(nums){
    //let data = [];
    //for(let i of nums){
        //if(data.includes(i))
        //    data.pop(i)
        //else{
        //    data.push(i);
       // }
    //}
    //return data[0];

    let data =new Set();
    for(let i = 0; i<nums.length; i++){
        if(data.has(nums[i])){
            data.delete((nums[i]));
        }
        else
            data.add(nums[i]);
    }
    let it = data.values();
    let first = it.next();
    let value = data.values().next().value;
    return value;
}

let arr =[1,0,1];
let data = singleNumber(arr);
console.log(data);