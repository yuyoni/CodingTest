function solution(A,B){
    A.sort((a,b)=> a-b);
    B.sort((a,b)=> b-a);
    
    return B.reduce((a,c,i) => a + c * A[i], 0);
}