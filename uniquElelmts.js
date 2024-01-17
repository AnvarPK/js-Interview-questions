function getUniques(input) {
    return input.filter((current, index) => input.indexOf(current) === index )
}


// complexity of O(1) for both insertion and lookup
//function getUniques(input) {
//     return Array.from(new Set(input));
// }
console.log(getUniques([1,2,3,4,2,3,1]));