let rotate = function(matrix) {
    for(let i = 0; i<matrix.length; i++)
    {
        for (let j = i; j < matrix[i].length; j++)
        {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for(let k = 0; k<matrix.length; k++)
    {
        let start = 0;
        let end = matrix[k].length - 1;
        while (start < end)
        {
            let temp = matrix[k][start];
            matrix[k][start] = matrix[k][end];
            matrix[k][end] = temp;
            start++;
            end--;
        }
    }
    console.log(matrix);
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
