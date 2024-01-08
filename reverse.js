function getReversed(input) {
    let startIndex = 0;
    let endIndex = input.length - 1;
    while (startIndex < endIndex ) {
        const temp = input[startIndex];
        input[startIndex] = input[endIndex];
        input[endIndex] = temp;
        startIndex++;
        endIndex--;
    }
    return input;
}


const a=[1,2,3,4,5,6,7,8];
console.log(getReversed(a));

