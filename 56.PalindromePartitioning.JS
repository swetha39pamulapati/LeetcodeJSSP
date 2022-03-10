let partition = function(s) {
    let result = [];
    Part(0,s, result, []);
    return result;
};
function Part(start,str,result,list){
    if(start == str.length)
        result.push(list.slice());
    for(let i = start; i<str.length; i++){
        if(isPal(str,start,i)){
            list.push(str.substr(start, i-start+ 1));
            Part(i+1,str,result,list);
            list.pop();
        }
    }
}
function isPal(str,left,right){
    while(left<right){
        if(str[left++] != str[right--]){
            //left++;
            //right--;
            return false;
        }

    }
    return true;
}
console.log(partition("aab"));