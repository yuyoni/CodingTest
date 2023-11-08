function solution(s) {
    const answer = [];
    const num = [];
    
    [...s].map((e, i) => {
        num.push(answer.lastIndexOf(e) == -1 ? -1 : i - answer.lastIndexOf(e));
        answer.push(e);
    })
    
    return num;
}