let nextGreatestLetter = function(letters, target) {
let l = 0, r = letters.length-1;
while(l<=r){
    let mid = Math.floor((l + r) / 2);
    if(letters[mid]<= target) {
        l = mid + 1;
    }
    else{
        r = mid-1;
    }
}
if(l>= letters.length)
    l = 0;
return letters[l];
};
let letters = ["c","f","j"], target = "a"

let data = nextGreatestLetter(letters,target);
console.log(data);