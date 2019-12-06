import os
import sys

def missing_number(arr,n):
    sum_i = 0
    for _ in arr:
        sum_i += _
    sum_n = (n*(n+1))//2
    return sum_n - sum_i

if __name__ == '__main__':
    t = int(input())

    for t_itr in range(t):
        N = int(input())
        arr = list(map(int, input().rstrip().split()))
        result = missing_number(arr,N)
        print(result)