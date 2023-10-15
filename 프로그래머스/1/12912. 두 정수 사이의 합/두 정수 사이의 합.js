function solution(a, b) {
    answer = [];
    let x = a < b? a : b;
    let y = b > a? b : a;
    
    for(let i=x; i<y+1; i++) {
        answer.push(i);
    }
    return answer.reduce((a,c) => a + c);
}