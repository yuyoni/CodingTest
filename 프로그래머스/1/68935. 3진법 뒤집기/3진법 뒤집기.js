function solution(n) {
    let arr = n.toString(3).split('');
    console.log(arr);
    arr.reverse();
    
    
    
    return (parseInt(arr.join(''), 3));
}