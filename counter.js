const counter = () => {
    let count = 0;
    return function () {
        count += 1;
        return count;
    }
}