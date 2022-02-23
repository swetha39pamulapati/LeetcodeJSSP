let letterCasePermutation = function(s) {
    let result= [];
    runDFS(s.split(''), 0, result);

    return result;
};
function runDFS(arr, start, result) {

    result.push(arr.join(''));
    for(let i = start;i<arr.length; i++)
    {
        let next = Array.from(arr);
        let current = arr[i];
        if(!isNaN(current)){
            continue;
        }
        if (current == current.toUpperCase())
        {
            next[i] = current.toLowerCase();
        }
        else
        {
            next[i] = current.toUpperCase();
        }

        runDFS(next, i + 1, result);
    }
}
let s = "a1b2";
console.log(letterCasePermutation(s));
