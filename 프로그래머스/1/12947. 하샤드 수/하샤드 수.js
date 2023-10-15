function solution(x) {
    // 하샤드 수 = x 자릿수 합으로 x가 나누어 떨어짐
    let accX = [...x.toString()].map(Number).reduce((a,c) => a + c);
    return (x % accX == 0)
}