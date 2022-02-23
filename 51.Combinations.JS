let combine = function(n, k) {
    let result = [];
    let list = [];
    generateCombinations(1,n,k,list,result);
    return result;
};
function generateCombinations(start,n,k,list,result) {
    if (list.length == k)
        result.push(list.slice());
    else
    {
        for(let i = start; i<=n; i++)
        {
            list.push(i);
            generateCombinations(i + 1, n, k, list, result);
            list.pop();
        }

    }
}
let   n = 4, k = 2;
console.log(combine(n,k));
