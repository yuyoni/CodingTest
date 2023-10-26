function solution(n) {
    let count = 0;

    for (let i=1; i<= n; i++) {
        let total = 0;
        for (let j=i; total <= n; j++) {
            total += j;
            
            if (total == n) count++;
            else if(total > n) break;
        }
    }
    return count;
}