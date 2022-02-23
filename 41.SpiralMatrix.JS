let spiralOrder = function(matrix) {
    let result = [];
    let direction = 0;
    let top = 0, down = matrix.length-1,left = 0, right = matrix[0].length-1;
    while(top<= down && left<= right){
        if(direction == 0){
            for(let i =left; i<= right; i++ ){
                result.push(matrix[top][i]);
            }
            top+=1;
        }
        if(direction == 1){
            for(let i = top; i<= down; i++){
                result.push(matrix[i][right]);
            }
            right-=1;
        }
        if(direction == 2){
            for(let i =right; i>= left; i-- ){
                result.push(matrix[down][i])
            }
            down -=1;
        }
        if(direction == 3){
            for(let i = down; i>= top; i--){
                result.push(matrix[i][left])
            }
            left+=1;
        }
        direction  = (direction +1) %4;
    }
    return result;
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralOrder(matrix));