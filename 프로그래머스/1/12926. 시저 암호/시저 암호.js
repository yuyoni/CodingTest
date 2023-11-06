function solution(s, n) {
    let ascCode = [...s].map(e=> e.charCodeAt());
    console.log(ascCode);
    const answer = [];
    
    for (let num of ascCode) {
        if ( 64 < num && num< 91) {
            num += n;
            if (num > 90) {
                num -= 26;
            }
        }
        else if (96 < num && num < 123) {
            num += n;
            if (num > 122) {
                num -= 26;
            }
            
        }
        answer.push(String.fromCharCode(num));
    }
    return answer.join('');
}