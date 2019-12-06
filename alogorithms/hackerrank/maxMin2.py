#!/bin/python3

import math
import os
import random
import re
import sys
# Complete the maxMin function below.

def maxMin(k, arr):
    arr.sort()
    temp = []
    for i in range(k):
        temp.append(arr.pop(0))
    curFair = max(temp)-min(temp)
    fairness = curFair
    
    while len(arr) > 0:
        temp.pop(0)
        temp.append(arr.pop(0))
        curFair = max(temp)-min(temp)
        fairness = min(curFair,fairness)
    return fairness

    # arr.sort()
    # return min((arr[i+k-1]-arr[i]) for i in range(len(arr)-k+1))

if __name__ == '__main__':
    #fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    k = int(input())

    arr = []

    for _ in range(n):
        arr_item = int(input())
        arr.append(arr_item)

    print(maxMin(k, arr))

    #fptr.write(str(result) + '\n')

    #fptr.close()
