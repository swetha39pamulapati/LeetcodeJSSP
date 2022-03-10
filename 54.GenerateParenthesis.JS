let generateParenthesis = function(n) {
    let result = [];

    backtrack(result,'',0,0,n);
    return result;
};
function  backtrack(result,str,open,close,maxLen){
    if(open == close && open == maxLen){
        result.push(str);
    }
    if(open<maxLen)
        backtrack(result,str +'(',open+1,close,maxLen);
    if(close<open)
        backtrack(result,str +')',open,close+1,maxLen);
}
console.log(generateParenthesis(2));