import os
import sys

def count_triplets(a,n):
    a = sorted(a)
    count = 0
    for i in range(n-2):
        sum_t = a[i] + a[i+1]
        if sum_t == a[i+2]:
            count += 1
    return count if count > 0 else -1
if __name__ == '__main__':
    t = int(input())

    for t_itr in range(t):
        N = int(input())
        arr = list(map(int, input().rstrip().split()))
        result = count_triplets(arr,N)
        print(result)