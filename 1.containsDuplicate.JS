var containsDuplicate = function ( nums ) {
    const set = new Set();
    for ( let i = 0; i < nums.length; ++i ) {
        if ( set.has( nums[i] ) ) return true;
        else set.add( nums[i] );
    }

    return false;
};

let arr = [1,2,2,3,4];
let data = containsDuplicate(arr);
console.log(data);