
import os
import sys

def maximum_sub_array(arr,k):
    max_sum,cur_sum=0,0
    for i in range(k):
        cur_sum += arr[i]
    max_sum = cur_sum
    for i in range(k,len(arr)):
        cur_sum = cur_sum + arr[i] - arr[i - k]
        max_sum = max(max_sum,cur_sum)
    return max_sum





