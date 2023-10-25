function solution(s) {
    let count = 0;
    let zero = 0;
    
    while (s!=1){
        zero += [...s].reduce((a,c)=> c == '0'? a+1: a, 0);
        s = s.replace(/0/g, '');
        s = s.length.toString(2);
        count++;
    }
    
    return [count, zero]
}