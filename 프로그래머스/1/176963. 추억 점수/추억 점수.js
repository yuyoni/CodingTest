function solution(name, yearning, photo) {
    let i = 0;
    let scoreObj = {};
    let total;
    
    for (let n of name) {
        scoreObj[n] = yearning[i];
        i++;
    }
    
    let answer = [];
    
    for (let onePhoto of photo){
        total = 0;
        for(let PersonInPhoto of onePhoto){
            if (PersonInPhoto in scoreObj) {
                total += scoreObj[PersonInPhoto];
            }
        }
        answer.push(total);
    }
    
    return answer
}