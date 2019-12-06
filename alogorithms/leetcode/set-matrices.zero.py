def setZero(arr):
    map_i,map_j = dict(), dict()
    for i in range(len(arr)):
        for j in range(len(arr[i])):
            if arr[i][j] == 0:
                if i not in map_i:
                    map_i[i] = 0
                if j not in map_j:
                    map_j[j] = 0

    for i in range(len(arr)):
        for j in range(len(arr[i])):
            if i in map_i or  j in map_j:
                arr[i][j] = 0


def setZero(arr):
    m,n = len(arr), len(arr[0])
    rows = [False] * m
    cols = [False] * n
    for i in range(m):
        for j in range(n):
            if arr[i][j] == 0:
                rows[i],cols[j] = True,True

    for i in range(m):
        for j in range(n):
            if rows[i] or  cols[j]:
                arr[i][j] = 0




arr = [
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]

setZero(arr)
print(arr)