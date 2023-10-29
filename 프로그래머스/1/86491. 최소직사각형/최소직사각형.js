function solution(sizes) {
    for (let card of sizes) {
        if (card[0] < card[1]) {
            let tmp = card[0];
            card[0] = card[1];
            card[1] = tmp;
        }
    }
    
    let row = [];
    let col = [];
    
    sizes.map(e=> {row.push(e[0]);
                  col.push(e[1]);
                  });
    
    return Math.max(...row) * Math.max(...col);
    
}