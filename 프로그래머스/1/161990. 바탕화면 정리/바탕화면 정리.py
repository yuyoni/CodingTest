def solution(wallpaper):
    lux = 50
    luy = 50
    rdx = 0
    rdy = 0
    
    for i in range(len(wallpaper)):
        for j in range(len(wallpaper[i])):
            if wallpaper[i][j] == "#":
                if i <= lux:
                    lux = i
                if i >= rdx:
                    rdx = i+1
                if j <= luy:
                    luy = j
                if j >= rdy:
                    rdy = j+1

    answer = [lux, luy, rdx, rdy]
    return answer