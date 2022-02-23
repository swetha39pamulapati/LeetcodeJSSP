let setZeroes = function(matrix) {
    let locations = [];
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] == 0) {
                locations.push([i, j]);
            }
        }
    }
    const setZeroWithCoordinates = (row, col) => {
        for(let col1 = 0; col1 < matrix[0].length; col1++) {
            matrix[row][col1] = 0;
        }
        for(let row1 = 0; row1 < matrix.length; row1++) {
            matrix[row1][col] = 0;
        }

    };
    for(let loc of locations) {
        setZeroWithCoordinates(loc[0], loc[1])
    }
    console.log(matrix);
};
let  matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]] ;
 setZeroes(matrix);
