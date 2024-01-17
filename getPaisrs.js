function findPairsWithSum(arr, k) {
  const result = [];
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    const complement = k - arr[i];

    if (seen.has(complement)) {
      result.push([arr[i], complement]);
    }

    seen.add(arr[i]);
  }

  return result;
}

// Example usage:
const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
const kValue = 2;

const pairs = findPairsWithSum(myArray, kValue);
console.log(pairs);