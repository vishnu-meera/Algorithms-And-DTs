
def maximum_sub_array(arr,k):
    maxi_sub_sum,current_sum = 0,0

    if len(arr) == 0 or k> len(arr):
         return -1
    for i in range(len(arr)):
        current_sum += arr[i]
        if i%k == 0  and current_sum > maxi_sub_sum:
            maxi_sub_sum = current_sum
            current_sum = 0
    return maxi_sub_sum

def maximum_sub_array_2(arr,k):
    maxi_sub_sum,current_sum = 0,0
    if len(arr) == 0 or k> len(arr):
         return -1
    for i in range(k):
        maxi_sub_sum += arr[i]
    current_sum = maxi_sub_sum

    for i in range(k,len(arr)):
        current_sum += arr[i] - arr[i-k]
        maxi_sub_sum = max(maxi_sub_sum,current_sum)

    return maxi_sub_sum

print("maximum_sub_array : " , maximum_sub_array([1, 4, 2, 10, 23, 3, 1, 0, 20],4))
print("maximum_sub_array_2 : ", maximum_sub_array_2([1, 4, 2, 10, 23, 3, 1, 0, 20],4))
