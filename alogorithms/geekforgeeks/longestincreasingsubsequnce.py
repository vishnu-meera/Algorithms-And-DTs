import os
import sys

def longest_increasing_subsequence(arr,n):
    length = [1] * n
    subSequence = [None] * n
    sequence = ""
    i = 1
    while i < n:
        for j in range(i):
            if arr[j] < arr[i]:
                if length[j] + 1 >= length[i]:
                    length[i] = length[j] + 1
                    subSequence[i] = j
        i += 1
    largestSubNo = max(length)
    index = length.index(largestSubNo)
    i = largestSubNo
    while i > 0:
        sequence  = str(arr[index]) + " " + sequence
        index = subSequence[index]
        i -= 1
    return largestSubNo,sequence

arr = [0,4,12,2,10,6,9,13,3,11,7,15]
print(longest_increasing_subsequence(arr, len(arr)))
# if __name__ == '__main__':
#     t = int(input())

#     for t_itr in range(t):
#         N = int(input())
#         arr = list(map(int, input().rstrip().split()))
#         result = longest_increasing_subsequence(arr,N)
#         print(result)