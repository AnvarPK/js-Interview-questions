function getUniques(input) {
    return input.filter((current, index) => input.indexOf(current) === index )
}



console.log(getUniques([1,2,3,4,2,3,1]));