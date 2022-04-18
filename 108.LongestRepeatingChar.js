let characterReplacement = function(s, k) {
    let n = s.length;
    let charCounts = new Array(26).fill(0);
    let windowStart = 0;
    let maxLength = 0;
    let maxCount = 0;
    for(let windowEnd =0; windowEnd<n; windowEnd++)
    {
        charCounts[s[windowEnd].charCodeAt(0) - 'A'.charCodeAt(0)]++;
        let currentCharCount = charCounts[s[windowEnd].charCodeAt(0) - 'A'.charCodeAt(0)];
        maxCount = Math.max(maxCount, currentCharCount);
        while(windowEnd - windowStart - maxCount + 1 > k)
        {
            charCounts[s[windowStart].charCodeAt(0) - 'A'.charCodeAt(0)]--;
            windowStart++;

        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
};
let s = "ABAB", k = 2;
console.log(characterReplacement(s,k));