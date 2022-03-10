let letterCombinations = function(digits) {
    let length = digits.length;
    if (!length) {
        return [];
    };
    let result = [];
    let digitMap =
        {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'};
    letterComb(0, digits, "", result, digitMap);
    return result;
};
function  letterComb(start, digits, data, result, digitMap){
    if(start == digits.length)
    {
        result.push(data);
        return;
    }
    let letters = digitMap[digits[start]];
    for(let i = 0;i< letters.length; i++)
    {
        letterComb(start + 1, digits, data + letters[i], result, digitMap);
    }
}
console.log(letterCombinations("23"));