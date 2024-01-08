function getReversedNum(num) {
    let n = 0;
    while (num > 0) {
        n = n * 10 + num % 10;
        num = parseInt(num / 10);
    }
    return n;
}

console.log(getReversedNum(1234343));