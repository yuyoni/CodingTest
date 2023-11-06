function solution(s, n) {
    return [...s].map(e => pushLetter(e, n)).join('');
}


function pushLetter(a, n) {
    let num = a.charCodeAt();
    if (num == 32) return a;
    
    const isAlphabet = a == a.toUpperCase() ? (num + n) > 90 : (num + n) > 122;
    
    return String.fromCharCode(isAlphabet ? num + n - 26 : num + n);
}