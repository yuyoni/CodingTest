function solution(absolutes, signs) {
    total = 0;
    for (let i=0;i<signs.length;i++) {
        total = signs[i] ? total + absolutes[i] : total - absolutes[i];
    }
    return total;
}