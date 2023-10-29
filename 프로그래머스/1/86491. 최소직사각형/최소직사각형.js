function solution(sizes) {    
    const rowSizes = [];
    const colSizes = [];
    
    sizes.map(arr=> {
        rowSizes.push(Math.max(...arr));
        colSizes.push(Math.min(...arr));
    });
    
    return Math.max(...rowSizes) * Math.max(...colSizes);
    
}