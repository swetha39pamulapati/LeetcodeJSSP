let totalFruit = function(fruits) {
    let lastFruit = -1;
    let secondLastFruit = -1;
    let lastFruitCount = 0;
    let currentMax = 0;
    let max = 0;
    fruits.forEach(function( fruit )
    {
        if(fruit == lastFruit || fruit == secondLastFruit)
        {
            currentMax += 1;
        }
        else
        {
            currentMax = lastFruitCount + 1;
        }
        if (fruit == lastFruit)
            lastFruitCount++;
        else
            lastFruitCount = 1;
        if (fruit != lastFruit)
        {
            secondLastFruit = lastFruit;
            lastFruit = fruit;
        }
        max = Math.max(currentMax, max);
    });
    return max;
};

let fruits = [1,2,1];
console.log(totalFruit(fruits));