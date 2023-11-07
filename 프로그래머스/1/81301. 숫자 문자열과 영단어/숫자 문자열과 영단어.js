function solution(s) {
    const engArr = 
          ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    engArr.map((e, i)=> { if (s.includes(e)) s = s.replaceAll(e, i); });
    
    return Number(s);
}