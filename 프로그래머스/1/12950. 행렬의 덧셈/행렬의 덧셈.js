function solution(arr1, arr2) {
    return arr1.map((row, i) => row.map((element, j) => element + arr2[i][j]));
}