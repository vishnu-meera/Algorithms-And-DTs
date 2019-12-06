#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the equal function below.
def equal(arr):
    maximum = max(arr)
    minimum = min(arr)
    difference = maximum - minimum
    count = 0
    distribution = 0
    
    while difference > 0:
        if difference >= 5:
            distribution = 5
        elif difference < 5 and difference >=2:
            distribution = 2
        else:
            distribution = 1
        
        for i in range(len(arr)):
            if arr[i] != maximum:
                arr[i] = arr[i] + distribution
        
        maximum = max(arr)
        minimum = min(arr)
        difference = maximum - minimum
        count+=1

    print(arr)
    return count

if __name__ == '__main__':
    #fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input())

    for t_itr in range(t):
        n = int(input())

        arr = list(map(int, input().rstrip().split()))

        print(equal(arr))

        #fptr.write(str(result) + '\n')

    #fptr.close()
