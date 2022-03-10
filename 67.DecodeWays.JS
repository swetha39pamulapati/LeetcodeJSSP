let numDecodings = function(s) {
    let dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] == '0' ? 0 : 1;
    for(let i = 2; i < dp.length; i++)
    {
        let oneDigit =parseInt( s.substr(i - 1, 1));
        let twoDigit =parseInt(s.substr(i - 2, 2));
        if (oneDigit > 0)
        {
            dp[i] += dp[i - 1];
        }
        if(twoDigit>=10 && twoDigit <= 26)
        {
            dp[i] += dp[i - 2];
        }
    }
    return dp[s.length];
};
console.log(numDecodings("12"));