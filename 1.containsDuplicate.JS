var containsDuplicate = function(arr){
    let data =[]
    for(let i of arr){
        if(data.includes(i)){

           return true
        }
        else{
            data.push(i)
        }
    }
    return false
};

let arr = [1,2,2,3,4];
let data = containsDuplicate(arr);
console.log(data);


