def solution(s):
    answer = True
    cnt_p = 0
    cnt_y = 0
    length = len(s)
    for i in range(0, length):
        if (s[i] == 'p') | (s[i] == 'P'):
            cnt_p+=1
        elif (s[i] == 'y') | (s[i]=='Y'):
            cnt_y+=1
    
    if cnt_p == cnt_y:
        return True
    else :
        return False