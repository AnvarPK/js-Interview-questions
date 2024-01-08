const getRepetead = (input) => input.filter((current, index) => (input.indexOf(current) < index));

console.log(getRepetead([1, 2, 3, 4, 2, 3, 1]));