function solution(s) {
    let arr = s.toLowerCase().split(" ");
    arr = arr.map(e => e.charAt(0).toUpperCase() + e.slice(1));
    return arr.join(" ");
}