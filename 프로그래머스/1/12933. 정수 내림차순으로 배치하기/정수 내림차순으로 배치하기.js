function solution(n) {
    let arr = [...n.toString()].map(Number).sort().reverse().join('')
    return parseInt(arr)
}