function solution(s) {
    let count = 0;
    let zero = 0;
    console.log(s.match(/0/g));
    while (s!=1){
        let tmpZero = s.match(/0/g) ? s.match(/0/g).length : 0;
        zero += tmpZero;
        s = s.replace(/0/g, '');
        s = s.length.toString(2);
        count++;
    }
    
    return [count, zero]
}