function solution(num) {
    let i = 0;
    while(num != 1) {
        num = num % 2 ? num * 3 + 1 : num / 2;
        i++
    }
    return i > 500 ? -1 : i
}