import os
import sys

def sort_0s_1s_2s(arr,n):
    return " ".join(str(x) for x in sorted(arr))

if __name__ == '__main__':
    t = int(input())

    for t_itr in range(t):
        N = int(input())
        arr = list(map(int, input().rstrip().split()))
        result = sort_0s_1s_2s(arr,N)
        print(result)