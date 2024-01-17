function solution(food) {
    const arr = [];
    
    for (let i=1; i<food.length+1; i++) {
        const tmp = (i+"").repeat(Math.floor(food[i]/2));
        arr[i] = tmp;
    }
    return (arr.join("") + "0" + arr.reverse().join(""))
}