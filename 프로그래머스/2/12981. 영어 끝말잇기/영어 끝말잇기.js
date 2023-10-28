function solution(n, words) {
    let answer = [];
    let theWord = '';
    
    // 첫번 째 : 끝말잇기가 정상적으로 이어졋는지 확인
    for(let i=0; i<words.length -1; i++) {
        if (words[i][words[i].length - 1] != words[i+1][0]) {
            theWord = words[i+1];
            break;
        }
    }
    
    // 두번 째 : 중복 단어가 있는지 확인
    
    for (let i=0; i<words.length; i++) {
        if(answer.includes(words[i])) {
            theWord = words[i];
            break;
        }
        else {
            answer.push(words[i]);
        }
    }
    
    // 3번째 : 잘 되고있으므로 [0, 0] 반환
    if (theWord == '') return [0, 0]
    
    
    // 탈락하는 사람의 번호 = (전체 길이 / n ) % words.lastIndexOf(theWord)
    // 그 사람이 자신의 몇 번째 차례에 탈락하는지 = Math.floor(words.lastIndexOf(theWord) / n)
    let num = (words.lastIndexOf(theWord) + 1) % n ? (words.lastIndexOf(theWord) + 1) % n : n;
    let turn = Math.floor(words.lastIndexOf(theWord) / n) + 1;
    
    answer = [num, turn];
    
    return answer;
}