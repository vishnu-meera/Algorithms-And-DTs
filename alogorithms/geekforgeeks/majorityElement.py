import os
import sys

def majority_element(arr,n):
    m = dict()
    for _ in arr:
        if _ in m : 
            m[_] += 1
        else:
            m[_] = 1
    for key in m:
        if m[key] > n/2:
            return key
    return -1

if __name__ == '__main__':
    t = int(input())

    for t_itr in range(t):
        N = int(input())
        arr = list(map(int, input().rstrip().split()))
        result = majority_element(arr,N)
        print(result)