#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the maxSubarray function below.
def maxSubarray(arr):
    S , P = arr[0], arr[0]
    M , MP= arr[0], arr[0]
    i = 1
    while i<len(arr):
        if arr[i] < 0:
            M = max(M,arr[i])
        elif arr[i] >= 0:
            if M < 0:
                M = arr[i]
            else:
                M += arr[i]
    
        if arr[i] > S+arr[i]:
            S = arr[i]
        else:
            S = S+arr[i]

        P = max(S,P)
        MP = max(M,MP)
        i+=1
    return[P,MP]
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input())

    for t_itr in range(t):
        n = int(input())

        arr = list(map(int, input().rstrip().split()))

        result = maxSubarray(arr)

        fptr.write(' '.join(map(str, result)))
        fptr.write('\n')

    fptr.close()
