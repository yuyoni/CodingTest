function solution(brown, yellow) {
    let width = (((brown / 2) - 2) + Math.sqrt((2 - (brown / 2)) ** 2 - 4 * yellow)) / 2;
    let height = (((brown / 2) - 2) - Math.sqrt((2 - (brown / 2)) ** 2 - 4 * yellow)) / 2;
    return [width + 2, height + 2];
}