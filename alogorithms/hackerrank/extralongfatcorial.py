#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the extraLongFactorials function below.
def extraLongFactorials(n):
    m = dict()
    def __fact(n,m):
        if n==1 or n==0:
            return 1
        if n in m:
            return m[n]
        return n * __fact(n-1,m)
    print(__fact(n,m))
if __name__ == '__main__':
    n = int(input())

    extraLongFactorials(n)
