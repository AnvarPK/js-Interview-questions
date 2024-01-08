function isBalanced(input) {
    const arr = [];
    const leftBrackets = '({[';
    const rightBrackets = ')}]';

    for (let i of input) {
        const iInLeft = leftBrackets.indexOf(i);
        const iInRight = rightBrackets.indexOf(i);
        if (iInLeft !== -1) {
            arr.push(i);
        }
        if (iInRight !== -1) {
            if (leftBrackets[iInRight] === arr.at(-1)) arr.pop();
            else arr.push(i);
        }
    }
    return !arr.length;

}

const el = "([]][])";
console.log(isBalanced(el));