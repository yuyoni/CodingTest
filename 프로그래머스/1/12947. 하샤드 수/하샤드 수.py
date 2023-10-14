def solution(x):
    
    answer = True
    
    # 하샤드 수 : x의 자릿수 합으로 x가 나누어 짐
    if x % sum(int(i) for i in str(x)) :
        answer = False
        
    return answer