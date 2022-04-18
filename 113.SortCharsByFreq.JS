let frequencySort = function(s) {
    let length = s.length;
    let alphabet = new Array(127).fill(0);
    let max = 0;
    let hash;
    for (let i = 0; i < length; i++) {
        alphabet[s.charCodeAt(i)] += 1;
        max = Math.max(max, alphabet[s.charCodeAt(i)]);
    };
    hash = new Array(max + 1).fill('');
    for (let i = 0; i < 127; i++) {
        let val = alphabet[i];
        hash[max - val] += String.fromCharCode(i).repeat(val);
    };
    return hash.join('');
};
let s = "tree";
console.log(frequencySort(s));