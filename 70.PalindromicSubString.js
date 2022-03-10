let countSubstrings = function(s) {
    if(!s) return 0;
    let count = 0;
    for (let i = 0; i<s.length; i++)
    {
        //odd
        count += ExpandAroundCenter(s, i, i);

        //even
        count += ExpandAroundCenter(s, i, i+1);
    }
    return count;
};
function ExpandAroundCenter( s,  start,  end)
{
    let counter = 0;
    while (start >= 0 && end < s.length && s[start] == s[end])
    {
        counter++;
        start--;
        end++;
    }
    return counter;
}
console.log(countSubstrings('aaa'));