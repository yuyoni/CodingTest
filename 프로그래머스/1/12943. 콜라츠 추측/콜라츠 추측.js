function solution(num) {
    let i = 0;
    while(true) {
        if (num == 1) break;
        num = num % 2 ? num * 3 + 1 : num / 2;
        i++
    }
    return i > 500 ? -1 : i
}