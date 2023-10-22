function solution(number) {
    let count = 0;

    function findTriplets(remaining, current, startIndex) {
        if (current.length === 3) {
            if (current.reduce((sum, num) => sum + num, 0) === 0) {
                count++;
            }
            return;
        }

        for (let i = startIndex; i < remaining.length; i++) {
            findTriplets(remaining, [...current, remaining[i]], i + 1);
        }
    }

    findTriplets(number, [], 0);
    return count;
}
