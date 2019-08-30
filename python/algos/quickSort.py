def quickSort(array,low,high):
    if(low<high):
        pivotIndex = partition(array,low,high)
        quickSort(array,low,pivotIndex-1)
        quickSort(array,pivotIndex+1,high)


def partition(array,low,high):
    i = low
    pivot = array[high]
    for j in range(low,high):
        if(array[j]<pivot):
            array[i],array[j]=array[j],array[i]
            i = i + 1
    array[i],array[high] = array[high],array[i]
    return i


array = [6,3,9,2,10,7]
print(array)
quickSort(array,0,len(array)-1)
print(array)