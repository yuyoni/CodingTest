function solution(n) {
    let answer = Array.from(String(n)).reverse();
    return answer.map(Number);
}
