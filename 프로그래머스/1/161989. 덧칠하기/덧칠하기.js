function solution(n, m, section) {
    
    let newStartPoint = 1;
    let count = 0;
    
    for (let sectionNum of section) {
        if (sectionNum < newStartPoint) {
            continue;
        }
        else {
            newStartPoint = sectionNum + m;
            count++;
        }
    }
    return count;
}