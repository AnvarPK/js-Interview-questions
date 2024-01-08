function getSorted(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let j = i - 1;
        let current = arr[i]
        while (j > -1 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;

    }
}

const a = [4, 1, 40, 1, 0, 5];

getSorted(a);
console.log(a)