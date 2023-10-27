function solution(s) {
    let tmp = s.split(' ').map((e)=> e.split('').map((e, i) =>i % 2 ? e.toLowerCase() : e.toUpperCase()));
    return tmp.map(e => e.join('')).join(' ');
}