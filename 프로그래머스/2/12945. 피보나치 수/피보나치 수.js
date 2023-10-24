function solution(n) {
    let num1 = 0n;
    let num2 = 1n;
    
    for(let i=0; i<n; i++) {
        let tmp = num1 + num2;
        num1 = num2;
        num2 = tmp;
    }
    
    return num1 % 1234567n;
}