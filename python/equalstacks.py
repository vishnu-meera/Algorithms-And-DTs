#!/bin/python3

import os
import sys

#
# Complete the equalStacks function below.
#
class Stack:
    def __init__(self):
        self.stackArray = []
    def push(self,value):
        self.stackArray.append(value)
    def pop(self):
        if len(self.stackArray) > 0:
            value = self.stackArray[-1]
            del self.stackArray[-1]
            return value
        return 0
    def peek(self):
        if len(self.stackArray) > 0:
            return self.stackArray[-1]
        return 0
    def isEmpty(self):
        if len(self.stackArray) == 0:
            return True
        else:
            return False

def equalStacks(h1, h2, h3):
    s1 = Stack()
    s2 = Stack()
    s3 = Stack()
    
    for x in h1[::-1]:
        s1.push(s1.peek()+x)
    for y in h2[::-1]:
        s2.push(s2.peek()+y)
    for z in h3[::-1]:
        s3.push(s3.peek()+z)

    while True:
        if (s1.isEmpty() or s2.isEmpty() or s3.isEmpty()):
            return 0

        st1TotalHeight = s1.peek()
        st2TotalHeight = s2.peek()
        st3TotalHeight = s3.peek()

        if (st1TotalHeight == st2TotalHeight) and (st1TotalHeight ==st3TotalHeight):
            return st3TotalHeight

        if (st1TotalHeight > st2TotalHeight) and (st1TotalHeight > st3TotalHeight):
            s1.pop()
        elif (st2TotalHeight > st1TotalHeight) and (st2TotalHeight > st3TotalHeight):
            s2.pop()
        elif (st3TotalHeight > st1TotalHeight) and (st3TotalHeight > st2TotalHeight):
            s3.pop()

if __name__ == '__main__':
    #fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n1N2N3 = input().split()

    n1 = int(n1N2N3[0])

    n2 = int(n1N2N3[1])

    n3 = int(n1N2N3[2])

    h1 = list(map(int, input().rstrip().split()))

    h2 = list(map(int, input().rstrip().split()))

    h3 = list(map(int, input().rstrip().split()))

    result = equalStacks(h1, h2, h3)
    print (result)
    #fptr.write(str(result) + '\n')

    #fptr.close()
