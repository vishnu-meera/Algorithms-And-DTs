import os
import sys

def maximum_subarray(arr,n):
    S , P = arr[0], arr[0]
    i = 1
    while i<len(arr):
        cu =S+arr[i]
        if arr[i] > cu:
            S = arr[i]
        else:
            S = cu
        P = max(S,P)
        i+=1

    return P

if __name__ == '__main__':
    t = int(input())

    for t_itr in range(t):
        N = int(input())
        arr = list(map(int, input().rstrip().split()))
        result = maximum_subarray(arr,N)
        print(result)