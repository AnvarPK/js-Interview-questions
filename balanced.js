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
            else return false;
        }
    }
    return !arr.length;

}

const el = "([]({{}})[])[";
console.log(isBalanced(el));



// `const getBalanced = (input) => {

//     const leftBrackets = '({[';
//     const rightBrackets = ')}]';
//     const arr=[];

//     for (let item of input) {
//         const itemInLeft = leftBrackets.indexOf(item);
//         const itemInRight = rightBrackets.indexOf(item);

//         if(itemInLeft !==-1) arr.push(item);
//         if(itemInRight !==-1) {
//             if(leftBrackets[itemInRight]===arr.at(-1)) arr.pop();
//             else arr.push(item)
//         }
//     }
//     return !arr.length
// }`