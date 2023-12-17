function solution(n) {
    // 1,2,3,4,5칸일 때를 계산해보면 피보나치 수열 규칙과 같음
    let prev = 0;
    let current = 1;

    for (let i = 1; i <= n; i++) {
        const temp = (prev + current) % 1234567;
        prev = current;
        current = temp;
    }

    return current;
}