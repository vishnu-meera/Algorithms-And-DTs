def solution(nums,no):
    begin,end = 0, len(nums)-1
    if begin > end:
        return -1

    while begin<=end:
        mid = begin + (end - begin)//2
        if target == nums[mid]:
            return mid
        elif nums[mid] >=nums[begin]:
            if target >= nums[begin] and target<nums[mid]:
                end = mid -1
            else:
                begin = mid+1
        else:
            if target <= nums[end] and target>nums[mid]:
                begin = mid + 1
            else:
                end = mid -1

    return -1


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        i,j=0,len(nums)-1
        count = 0
        while i<=j:
            if target == nums[i]:
                return i
            else:
                i+=1
            if target == nums[j]:
                return j
            else:
                j-=1
            count+=1
        print(count)
        return -1
        