let lengthOfLongestSubstring = function(s) {
    let aPointer = 0;
    let max = 0;
    let bPointer = 0;
    let hashSet = new Set();
    while (bPointer < s.length)
    {
        if (!hashSet.has(s[bPointer]))
        {
            hashSet.add(s[bPointer]);
            bPointer++;
            max = Math.max(hashSet.size, max);
        }
        else
        {
            hashSet.delete(s[aPointer]);
            aPointer++;
        }
    }
    return max;
};
let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));