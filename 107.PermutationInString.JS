let checkInclusion = function(s1, s2) {
    if(s1.length > s2.length)
        return false;

    let len1 = s1.length, len2 = s2.length;
    let freq = new Array(26).fill(0);
    let freq2 = new Array(26).fill(0);
    for(let i = 0; i < len1; i++)
    {
        //freq[t.charCodeAt(0) - 'A'.charCodeAt(0)];
        freq[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        freq2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    let left = 0 , right = len1 - 1;

    while(right < len2)
    {
        if(IsEqual(freq, freq2))
            return true;

        right++;
        if(right < len2)
            freq2[s2[right] - 'a'.charCodeAt(0)]++;

        freq2[s2[left] - 'a'.charCodeAt(0)]--;
        left++;
    }

    return false;
}

function IsEqual(freq1,freq2)
{
    for(let i = 0; i < freq1.length; i++)
    {
        if(freq1[i] != freq2[i])
            return false;
    }

    return true;
}
let s1 = "ab", s2 = "eidboaoo";
console.log(checkInclusion(s1,s2));