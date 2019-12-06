import os
import sys

def longest_increasing_subsequence(arr,n):
    length = [1] * n
    i = 1
    
    while i < n:
        for j in range(i):
            if arr[j] < arr[i]:
                if length[j] + 1 >= length[i]:
                    length[i] = length[j] + 1
        i += 1
    return max(length)

def longest_increasing_subsequence_nlogn(arr,n):
    tails = [0] * n
    size = 0

    for _ in arr:
        i,j=0,size
        while i != j:
            m = (i+j)//2
            if tails[m] < _ :
                i = m + 1
            else:
                j = m
        tails[i] = _
        size = max(i+1,size)
        print(tails)
    print(tails)
    return size
#arr = [0,4,12,2,10,6,9,13,3,11,7,15]
arr = [0,4,12,2,10,6,9,13,3,11,7,15]
longest_increasing_subsequence_nlogn(arr, len(arr))
# if __name__ == '__main__':
#     t = int(input())

#     for t_itr in range(t):
#         N = int(input())
#         arr = list(map(int, input().rstrip().split()))
#         result = longest_increasing_subsequence(arr,N)
#         print(result)