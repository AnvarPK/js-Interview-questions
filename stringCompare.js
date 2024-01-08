function compareString(a, b) {
    if (a?.length !== b.length) return false;
    const charCount = {};
    for (let char of a) charCount[char] = (charCount[char] || 0) + 1;
    for (let char of b) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }
    return true;
}

console.log(compareString("abc", "acb"))