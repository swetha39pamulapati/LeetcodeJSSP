let reorganizeString = function(S) {
    let map = {};
    for(let i=0; i<S.length; i++){
        map[S[i]] = map[S[i]] || 0;
        map[S[i]] ++;
    }

    let keys = Object.keys(map).sort((a,b)=>{
        if(map[a]<map[b])
            return 1;
        return -1;
    });
    let benchmark = S.length%2?(Math.floor(S.length/2)+1):S.length/2;
    if(map[keys[0]] > benchmark)
        return "";

    let result = [];
    let mostFrequency = map[keys[0]];
    let index = 0, max = S.length-1;
    while(keys.length){
        let currKey = keys.shift();
        let count = map[currKey];
        while(count){
            result[index] = currKey;
            index = index+2;
            if(index>max)
                index=1;
            count--;

        }
    }
    return result.join("");
};
let s = "aab";
console.log(reorganizeString(s));