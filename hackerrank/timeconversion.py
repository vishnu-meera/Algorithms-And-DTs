#!/bin/python3

import os
import sys

#
# Complete the timeConversion function below.
#
def timeConversion(s):
    arr = s.split(":")
    if arr[2][-2:] == "PM":
        arr[0] = str(int(arr[0])) if int(arr[0])==12 else str(int(arr[0]) + 12)
    else:
        if int(arr[0])==12:
            arr[0]="00"
    arr[2] = arr[2][:2]
    return ":".join(arr)
if __name__ == '__main__':

    s = input()

    result = timeConversion(s)

    print(result)
