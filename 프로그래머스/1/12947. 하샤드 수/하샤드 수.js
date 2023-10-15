function solution(x) {
    // 하샤드 수 = x 자릿수 합으로 x가 나누어 떨어짐
    let accX = (x + "").split("").reduce((a,c) => a + parseInt(c), 0);
    return (x % accX == 0)
}