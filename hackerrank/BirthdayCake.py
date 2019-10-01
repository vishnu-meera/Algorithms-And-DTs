#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the birthdayCakeCandles function below.
def birthdayCakeCandles(ar):
    count,maxi = 1,ar[0]
    for _ in range(1,len(ar)):
        if ar[_] == maxi:
            count += 1
        elif ar[_] > maxi:
            maxi = ar[_]
            count = 1
        else:
            pass

    return count
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    ar_count = int(input())

    ar = list(map(int, input().rstrip().split()))

    result = birthdayCakeCandles(ar)

    fptr.write(str(result) + '\n')

    fptr.close()
