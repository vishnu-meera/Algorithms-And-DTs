#!/bin/python3

import math
import os
import random
import re
import sys

class Stack:
    def __init__(self):
        self.stackArray = []
    def push(self,value):
        self.stackArray.append(value)
    def pop(self):
        value = self.stackArray[-1]
        del self.stackArray[-1]
        return value
    def peek(self):
        if len(self.stackArray) > 0:
            return self.stackArray[-1]
        return ""
    def isEmpty(self):
        if len(self.stackArray) == 0:
            return True
        else:
            return False

dict2 = { "}":"{" , "]":"[",")":"("}

# Complete the isBalanced function below.
def isBalanced(s):
    _stack = Stack()
    _stack2 = Stack()
    for c in s:
        if c in dict2.values():
            _stack.push(c)
        elif c in dict2.keys():
            _stack2.push(c)
            data = _stack.peek()
            if data == dict2[c]:
                _stack.pop()
                _stack2.pop()

    if _stack.isEmpty() and _stack2.isEmpty():
        return "YES"
    else:
        return "NO"
        
if __name__ == '__main__':
    #fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input())

    for t_itr in range(t):
        s = input()

        result = isBalanced(s)

        print(result)

    #fptr.close()
