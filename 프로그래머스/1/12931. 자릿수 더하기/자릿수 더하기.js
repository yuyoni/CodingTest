function solution(n)
{
    return [...n.toString()].map(Number).reduce((a,c) => a + c);
}