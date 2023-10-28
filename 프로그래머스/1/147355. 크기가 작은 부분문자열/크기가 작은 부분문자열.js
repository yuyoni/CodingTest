function solution(t, p) {
    let count = 0;
    
    for (let i=0; i<t.length - (p.length - 1); i++) {
        console.log(t.slice(i, i + p.length));
        t.slice(i, i + p.length) <= p ? count++ : null;
    }
    return count;
}