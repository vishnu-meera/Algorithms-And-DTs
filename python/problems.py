import random
global str

def reverse(array):
    low = 0
    high = len(array)-1
    middle = (low+high)//2
    for j in range(low,middle):
        array[j],array[high-j]=array[high-j],array[j]

def paliandrome(text):
    text = text.lower()
    low = 0
    high = len(text)-1
    middle = (low+high)//2

    for j in range(low,middle):
        if ord(text[j]) != ord(text[high-j]):
            return False
    return True

def findingDuplicatesInArray(nums):
    for num in nums:
        if nums[abs(num)]>0:
            nums[abs(num)]=-nums[abs(num)]
        else:
            print('duplicate found ' , abs(num)) 

def intergrReverse(num):
    reversed = 0
    remainder = 0

    while num>0:
        remainder = num % 10
        num = num//10
        reversed = reversed * 10 + remainder

    return reversed

if __name__ == "__main__":
    # array = random.sample(range(1,100),9)
    # print(array)
    # reverse(array)
    # print(array)
    #print("1876543 ",intergrReverse(1876543))
    findingDuplicatesInArray([2,6,5,1,4,3,2])
