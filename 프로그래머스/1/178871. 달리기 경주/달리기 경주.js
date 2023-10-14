function solution(players, callings) {
    // 선수의 이름을 키로, 그 위치를 값으로 하는 객체를 생성
    let positions = {};
    for (let i = 0; i < players.length; i++) {
        positions[players[i]] = i;
    }

    for (let calling of callings) {
        let idx = positions[calling];
        // swap the player with the one in front of them
        [players[idx], players[idx - 1]] = [players[idx - 1], players[idx]];
        
        // 위치가 바뀌었으므로, positions 객체도 업데이트
        positions[players[idx]] = idx;
        positions[players[idx - 1]] = idx - 1;
    }

    return players;
}