let longestPalindrome = function(s) {
    let maxLength = 0, startIndex = 0;
    for (let i = 0; i < s.length; i++)
    {
        let start = i, end = i;
        while (end < s.length - 1 && s[start] == s[end + 1])
            end++;

        while (end < s.length - 1 && start > 0 && s[start - 1] == s[end + 1])
        {
            start--;
            end++;
        }
        if (maxLength < end - start + 1)
        {
            maxLength = end - start + 1;
            startIndex = start;
        }
    }
    return s.substr(startIndex, maxLength);
};
console.log(longestPalindrome('caabed'));