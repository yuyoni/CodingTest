function solution(arr) {
    // reduce로 a 이전값 b 현재값에 대해 순회
    // a는 초기값 설정 안해줌으로서 배열의 첫번째 값이며,
    // a = a*b / gcd(a,b), 즉 최소공배수로 계산해줌
    return (arr.reduce((a,b) => a*b / gcd(a,b)));
}

function gcd(a, b) {
  return a % b ? gcd(b, a%b) : b
}