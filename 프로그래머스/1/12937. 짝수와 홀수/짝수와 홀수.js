function solution(num) {
    const oddOrEven = ["Even", "Odd"];
    return oddOrEven[Math.abs(num % 2)];
}