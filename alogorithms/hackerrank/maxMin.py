#!/bin/python3

import math
import os
import random
import re
import sys

class heap:
    def __init__(self,capacity):
        self.heap = [None] * capacity
        self.size = 0
        self.capacity = capacity
    def insert(self,data):
        if self.size == self.capacity:
            return
        self.heap[self.size] = data
        self.size = self.size + 1
        self.fixUp(self.size-1)
    def fixUp(self,size):
        parent = (size-1)//2
        if size >0 and self.heap[size] < self.heap[parent]:
            self.heap[size],self.heap[parent] = self.heap[parent],self.heap[size]
            self.fixUp(parent)
    def getMin(self):
        return self.heap[0]
    def pop(self):
        minmum = self.getMin()
        s = self.size - 1
        self.heap[0],self.heap[s] = self.heap[s],self.heap[0]
        self.size = s
        self.fixDown(0)
        return minmum
    def fixDown(self,s):
        ls = (2*s) + 1
        rs =(2*s) + 2
        larS  = s
        if ls < self.size and self.heap[ls] < self.heap[s]:
            larS = ls
        if rs < self.size and self.heap[rs] < self.heap[ls]:
            larS = rs
        if s != larS:
            self.heap[s],self.heap[larS] = self.heap[larS],self.heap[s]
            self.fixDown(larS)

# Complete the maxMin function below.
def maxMin(k, arr):
    result = []
    for i in range(k):
        result.append(arr.pop())
    return max(result) - min(result)
  

if __name__ == '__main__':
    #fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    k = int(input())

    arr = heap(n)

    for _ in range(n):
        arr_item = int(input())
        arr.insert(arr_item)

    print(maxMin(k, arr))

    #fptr.write(str(result) + '\n')

    #fptr.close()
