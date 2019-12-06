def twoSum(nums, target):
    retList = list()
    indexMap = dict()
    for i in range(len(nums)):
        indexMap[nums[i]]=i
    for i in range(len(nums)):
        othrnum = target - nums[i]
        if othrnum in indexMap and indexMap[othrnum]!=i:
            retList.append(i)
            retList.append(indexMap[othrnum])
            break
    return retList

print(twoSum([-1,-2,-3,-4,-5],-8))