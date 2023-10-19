function solution(s){
    let answer = [];
    
    for (let e of s) {
        if (e != answer[answer.length - 1]) answer.push(e);
        else answer.pop();
    }
    
    return Number(answer.length == 0);
}