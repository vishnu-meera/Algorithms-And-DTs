def quickSort(array,low,high):
    if(low<high):
        pivotIndex = partition_2(array,low,high)
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

def partition_2(array,low,high):
    i,j = low,high
    pivot = array[low]
    while i < j:
        while array[i] <= pivot:
            i += 1
        while array[j] > pivot:
            j -= 1
        if i < j:
            array[i],array[j] = array[j],array[i]
    array[low],array[j] = array[j],array[low]
    return j

def quickItrative(array,low,high):
    stack = list()
    stack.append(low)
    stack.append(high)
    while stack:
        h = stack.pop()
        l = stack.pop()
        if l < h:
            p = partition_2(array,l,h)
            stack.append(l)
            stack.append(p-1)
            stack.append(p+1)
            stack.append(h)

array = [6,3,9,2,10,7]
print(array)
quickItrative(array,0,len(array)-1)
print(array)