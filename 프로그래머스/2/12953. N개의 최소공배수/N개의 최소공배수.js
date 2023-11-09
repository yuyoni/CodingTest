function solution(arr) {
    while(arr.length != 1) {
        let lcm = getLcm(arr[arr.length-1], arr[arr.length-2]);
        arr.pop();
        arr.pop();
        arr.push(lcm);
    }
    
    return (arr[0]);
}

function getLcm(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return lcm(num1, num2);
}