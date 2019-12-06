#!/bin/python3

import os
import sys

#
# Complete the virusIndices function below.
#
def virusIndices(p, v):
    hasmatch = False
    s = ""
    pl = len(p)
    vl = len(v)
    i,k,diff = 0,0,0

    while i < (pl-vl):
        diff = 0
        while k<=(i+vl-1):
            if ord(p[k]) != ord(v[k-i]):
                diff+=1
                if diff >=2:
                    break
            k+=1
        if diff<2:
            s = s + str(i) + " "
            hasmatch = True
        i+=1

    if hasmatch:
        print(s)
    else:
        print("No Match!")

if __name__ == '__main__':
    t = int(input())

    for t_itr in range(t):
        pv = input().split()

        p = pv[0]

        v = pv[1]

        virusIndices(p, v)
