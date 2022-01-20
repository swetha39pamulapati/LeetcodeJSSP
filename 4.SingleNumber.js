var singleNumber = function(arr){
    let data = [];
    for(let i of arr){
        if(data.includes(i))
            data.pop(i)
        else{
            data.push(i);
        }
    }
    return data[0];
}

let arr =[4,1,2,1,2];
let data = singleNumber(arr);
console.log(data);