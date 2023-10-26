function solution(d, budget) {
    d.sort((a,b) => a-b);
    let total = 0;
    let count = 0;
    
    for(let i=0; total <= budget; i++) {
        total += d[i];
        count++;
    }
    
    return count-1;
}