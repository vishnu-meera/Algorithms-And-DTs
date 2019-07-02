import random
import time

def bubble_sort(nums):
    for i in range(len(nums)-1):
        for j in range(0,len(nums)-1-i):
            if nums[j]>nums[j+1]:
                swap(nums,j,j+1)
    
    return nums

def selection_sort(nums):
    for i in range(len(nums)-1):
        index = i
        for j in range(i+1,len(nums)):
            if nums[j]<nums[index]:
                index=j
        if index != i:
            swap(nums,index, i)
    
    return nums

def insertion_sort(nums):
    for i in range(len(nums)):
        j = i
        while j>0 and nums[j-1]>nums[j]:
            swap(nums,j,j-1)
            j=j-1

    return nums

def quik_sort_r(nums,low,high):
    if low >= high :
        return
    pivot = partion(nums,low,high)
    quik_sort_r(nums,low,pivot-1)
    quik_sort_r(nums,pivot+1,high)

def swap(nums,i,j):
    nums[i],nums[j]=nums[j],nums[i]

def partion(nums,low,high):
    pivot = (low+high)//2
    swap(nums,pivot,high)
    i=low

    for j in range(low,high):
        if nums[j]<=nums[high]:
            swap(nums,j,i)
            i = i+ 1

    swap(nums,i,high)
    return i
    
if __name__ == "__main__":
    array = random.sample(range(1,10000),9000)
    start = time.time()
    array = bubble_sort(array)
    end = time.time()
    print("bubble sort 9000: ", end - start)

    array = random.sample(range(1,10000),9000)
    start = time.time()
    array = selection_sort(array)
    end = time.time()
    print("selection sort 9000: ", end - start)

    array = random.sample(range(1,10000),9000)
    start = time.time()
    array = insertion_sort(array)
    end = time.time()
    print("insertion sort 9000: ", end - start)

    array = random.sample(range(1,10000),9000)
    start = time.time()
    quik_sort_r(array,0,len(array)-1)
    end = time.time()
    print("quick sort recurion 9000: ", end - start)

    #print(array)


