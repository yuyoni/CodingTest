function solution(num_list, n) {
    let count = 0;
    let answer = [];
    
    for(let i=0; i<num_list.length; i+=n) {
        answer.push(num_list.slice(i, i+n));
    }
    return answer
}