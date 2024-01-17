function compressString(inputString) {
    let compressedString = '';
    let count = 1;
  
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === inputString[i + 1]) {
        // Increment count if the current character is the same as the next one
        count++;
      } else {
        // Append the character and its count to the compressed string
        compressedString += inputString[i] + count;
        // Reset the count for the next character
        count = 1;
      }
    }
  
    return compressedString.length < inputString.length ? compressedString : inputString;
  }
  
  // Example usage:
  const originalString = "aaabbbbcc";
  const compressedString = compressString(originalString);
  console.log(compressedString);