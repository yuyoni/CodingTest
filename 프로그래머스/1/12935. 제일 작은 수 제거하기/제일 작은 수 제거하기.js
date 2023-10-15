function solution(arr) {
    minNumber = Math.min(...arr);
    arr = arr.filter((num) => num > minNumber);
    return arr.length ? arr : [-1];
}