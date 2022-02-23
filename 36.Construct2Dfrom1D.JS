let construct2DArray = function(original, m, n) {
    if (m * n !== original.length) {
        return [];
    }

    let a = [];

    for (let i = 0; i < m; i++) {
        a.push(original.splice(0, n));
    }

    return a;
};
let original = [1,2,3,4], m = 2, n = 2;
console.log(construct2DArray(original,m,n));