let combinationSum3 = function(k, n) {
    let result = [];

    let list = [];
    generateCombination(1, k, n,list, result);
    return result;
};
function  generateCombination(start, k, n,list, result){
    if(n<0)
        return;
    if(k ==0 && n == 0)
    {
        result.push(list.slice());
    }
    else{
        for(let i = start; i<= 9; i++){
            list.push(i);
            generateCombination(i+1,k-1,n-i,list,result);
            list.pop();
        }
    }
}
let k = 3, n = 7;
console.log(combinationSum3(k,n));