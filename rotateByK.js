function getReversed(input, startIndex, endIndex) {
    while (startIndex < endIndex) {
        const temp = input[startIndex];
        input[startIndex] = input[endIndex];
        input[endIndex] = temp;
        startIndex++;
        endIndex--;
    }
    return input;
}


const a = [1, 2, 3, 4, 5, 6, 7, 8];
k = 3;


const getRotatedByK = (input, k) => {
    let startIndex = 0;
    let endIndex = input.length - 1;
    k = k % input.length;
    getReversed(input, startIndex, endIndex);
    getReversed(input, 0, k-1);
    getReversed(input, k, endIndex);
    return input;
}

console.log(getRotatedByK(a, k));