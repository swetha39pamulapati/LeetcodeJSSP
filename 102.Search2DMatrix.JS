let searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let colums = matrix[0].length;
    let left = 0;
    let right = rows * colums - 1;
    while(left<= right)
    {
        let mid =Math.floor(left + (right - left) / 2);
        let div = Math.floor(mid/colums);
        let percentage = Math.floor(mid%colums)
        let midPointElement = matrix[div][percentage];
        if (midPointElement == target)
            return true;
        if (midPointElement < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return false;
};
let  matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3;
console.log(searchMatrix(matrix, target));