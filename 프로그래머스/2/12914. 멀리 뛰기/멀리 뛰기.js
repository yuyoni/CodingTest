function solution(n) {
    // 1,2,3,4,5칸일 때를 계산해보면 피보나치 수열 규칙임
    let prev = 1;
    let current = 2;

    for (let i = 3; i <= n; i++) {
        const temp = (prev + current) % 1234567;
        prev = current;
        current = temp;
    }

    return n === 1? 1 : current;
}