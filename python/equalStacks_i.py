#!/bin/python3

import sys

def commonHighest(stacks):
    stacksHeight = [sum(stack) for stack in stacks]
    currentMin = min(stacksHeight)
    i = 0
    while i < len(stacks):
        if stacksHeight[i] > currentMin:
            stacksHeight[i] -= stacks[i].pop()
            if stacksHeight[i] < currentMin: currentMin = stacksHeight[i]
            i = 0
            continue
        i += 1
    return stacksHeight[0]


n1,n2,n3 = input().strip().split(' ')
n1,n2,n3 = [int(n1),int(n2),int(n3)]
h1 = [int(h1_temp) for h1_temp in input().strip().split(' ')]
h2 = [int(h2_temp) for h2_temp in input().strip().split(' ')]
h3 = [int(h3_temp) for h3_temp in input().strip().split(' ')]
h1.reverse(), h2.reverse(), h3.reverse()

print (commonHighest([h1, h2, h3]))