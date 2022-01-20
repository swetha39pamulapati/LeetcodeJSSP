var climbStairs = function(n){
    if(n < 0){
        return 0;
    }else if(n == 1){
        return 1;
    }else{
        let a = 0;
        let b = 1;
        let c = 0;
        for(let i = 0; i < n; i++){
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
}

let data = climbStairs(5);
console.log(data);