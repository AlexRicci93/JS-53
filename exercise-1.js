function sum(...num) {

    let sum = num.reduce((sum, current) => sum + current, 0 );
    return sum;
}

console.log(sum(1, 2, 3, 4, 5));