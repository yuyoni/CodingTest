function solution(arr, divisor) {
    let newarr = arr.filter(num => num % divisor === 0);
    newarr.sort((a, b) => a - b);

    return newarr.length? newarr : [-1]; 
}