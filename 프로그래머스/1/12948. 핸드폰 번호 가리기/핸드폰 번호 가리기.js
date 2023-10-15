function solution(phone_number) {
    let numLen = phone_number.length;
    
    let firstNum = new Array(phone_number.length -4).fill("*");
    let lastNum = phone_number.slice(numLen-4, numLen);
    
    return firstNum.concat(lastNum).join("");
}