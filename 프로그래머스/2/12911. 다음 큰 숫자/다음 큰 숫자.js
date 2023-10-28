function solution(n) {
    for (let num = n+1; num< 1000000; num++){
        if(n.toString(2).match(/1/g).length == num.toString(2).match(/1/g).length) return num;
    }
}