#!/bin/python3

import os
import sys

#
# Complete the virusIndices function below.
#
def virusIndices(p, v):
    arr = list()
    vl =len(v)
    for i in range(len(p)):
        c = i+vl
        sub = p[i:c]
        if len(sub) == vl:
            if(sub==v):
                arr.append(i)
            else:
                # count = 0
                # u = zip(sub,v)
                # for z,j in u:
                #     if z != j :
                #         count += 1
                # if count == 1:
                #     arr.append(i)
                test = []
                for j in range(len(v)):
                    if sub[j]==v[j]:
                        test.append(1)
                    else:
                        test.append(0)
                if test.count(0)<=1:
                    arr.append(i)
    if len(arr)>0:
        print(*arr)
    else:
        print("No Match!")

if __name__ == '__main__':
    t = int(input())

    for t_itr in range(t):
        pv = input().split()

        p = pv[0]

        v = pv[1]

        virusIndices(p, v)
