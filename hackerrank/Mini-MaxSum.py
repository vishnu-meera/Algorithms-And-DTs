#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the miniMaxSum function below.
def miniMaxSum(arr):
    sumi = sum(arr)
    maxi = max(arr)
    mini = min(arr)
    print(sumi-maxi,sumi-mini)

if __name__ == '__main__':
    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)
