#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'longestVowelSubsequence' function below.
#
# The function is expected to return an INTEGER.
# The function accepts STRING s as parameter.
#

vowels = ['a','e','i','o','u']
mapping = {'a':0,'e':1,'i':2,'o':3,'u':4}

def isValid(sublist):
    for vow in vowels:
        if vow not in sublist:
            return False
    return True

def longestSubsequence(string,subList, index): 
    if index == len(string): 
        if isValid(subList) == True: 
            return subList 
        else: 
            return [] 
          
    else: 
        if len(subList) == 0: 
              
            if string[index] != 'a': 
                return longestSubsequence(string, subList, index + 1) 
            else: 
                return longestSubsequence(string, subList + [string[index]], index + 1) 
          
        elif mapping[subList[-1]] == mapping[string[index]]: 
            return longestSubsequence(string, subList + [string[index]], index + 1) 
          
        elif (mapping[subList[-1]] + 1) == mapping[string[index]]: 
              
            sub1 = longestSubsequence(string, subList + [string[index]], index + 1) 
            sub2 = longestSubsequence(string, subList, index + 1) 
            
            if sub1 is None:
                return sub2
            if sub2 is None:
                return sub1
            if len(sub1) > len(sub2): 
                return sub1 
            else: 
                return sub2    
        else: 
            longestSubsequence(string, subList, index + 1) 

if __name__ == '__main__':
    #fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = longestSubsequence(s,[],0)

    print(result)

    #fptr.close()
