def solution(lottos, win_nums):
    
    len_zeros = lottos.count(0)
    
    #원래 맞춘 번호 갯수
    cnt = 0
    
    for i in lottos:
        for j in win_nums:
            if i == j :
                cnt += 1

    ### 0으로 적힌 값이 전부 맞았을 때가 최대
    ## 등수결정 = 7 - 다 맞은 빈자리 갯수 + 원래 맞은 자리 
    max_prize = (7 - (cnt + len_zeros))
    
    if (max_prize == 7):
        max_prize = 6
    
    ### 0으로 적힌 값이 전부 틀렸을 때
    ## 7 - 다 틀린 빈자리(=0) + 원래 맞은 자리
    min_prize = (7 - cnt)
    
    if (min_prize == 7):
        min_prize = 6
        
    answer = [max_prize, min_prize]
    
    return answer

# lottos에서 0 갯수 세서 그 수 만큼 win_nums 중에서 뽑아서 채울건데 
# win_nums 배열에서 이미 lottos에 있는것은 제외하고
# win_nums 에서 빈자리 n개를 다채우거나, n-1개 채우거나, .. 0개 채우거나 했을 때의 등수를 확인 -> win_nums와 몇개 숫자가 일치하는지를 각각의 경우에 반환
