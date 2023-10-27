function solution(s) {
    let i = 0;
    let arr = [...s].map((element)=> {
        let tmp = i % 2 ? element.toLowerCase() : element.toUpperCase();
        i++;
        if (element == ' ') i=0;
        return tmp;
    })
    
    return arr.join('');
}