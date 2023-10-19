function solution(n, m) {
    let num1 = Math.min(n,m);
    let num2 = Math.max(n,m);
    
    let LCM;
    let GCD;
    
    for (let i=num1; i>=1; i--) if (!(num1 % i || num2 % i)) {
        GCD = i;
        break;
    }
    for (let i=num2; i<=num1*num2; i++) if (!(i % num1 || i % num2)) {
        LCM = i;
        break;
    }
    
    return [GCD, LCM];
}