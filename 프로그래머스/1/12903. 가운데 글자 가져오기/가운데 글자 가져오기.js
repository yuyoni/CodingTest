function solution(s) {
    const tmpNum = parseInt(s.length / 2);
    return s.length % 2 ? s[tmpNum] : s[tmpNum - 1] + s[tmpNum]
}