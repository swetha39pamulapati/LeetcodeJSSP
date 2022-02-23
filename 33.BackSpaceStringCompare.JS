let backspaceCompare = function(S, T) {
    const backedS = backStr(S)
    const backedT = backStr(T)

    return backedS == backedT
};

function backStr(str) {
    let res = "";


    for (let i = 0; i <=str.length; i++) {
        if (str.charAt(i) != '#') {
            res += str.charAt(i);
        } else if (res.length > 0) {
           res = res.slice(0, -1);
        }
    }

    return res
}

let s = "ab#c", t = "ade#c";
console.log(backspaceCompare (s,t));