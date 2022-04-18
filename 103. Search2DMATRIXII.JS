let searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let left = 0;
    let right = rows - 1;
    while (right >= 0 && left < cols)
    {
        if (matrix[right][left] > target)
            right--;
        else if (matrix[right][left] < target)
            left++;
        else
            return true;
    }

    return false;
};
let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5;
console.log(searchMatrix(matrix,target))