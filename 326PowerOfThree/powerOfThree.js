var isPowerOfThree = function(n) {
    let ref = Number.parseInt(Math.log(n) / Math.log(3));
    return n - Math.pow(3,ref) == 0 ? true : false;
};


console.log(isPowerOfThree(3486784401));

// Platform solution: Using loop

var isPowerOfThree2 = function(n) {
    if (n <= 0) return false;
    while (n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
};