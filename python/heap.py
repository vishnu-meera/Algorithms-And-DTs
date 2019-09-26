class heap:
    def __init__(self,capacity):
        self.heapArray = [None] * capacity
        self.heapsize = 0
        self.capacity = capacity

    def insert(self,data):
        if self.heapsize == self.capacity:
            return
        self.heapArray[self.heapsize] = data
        self.heapsize = self.heapsize + 1

        self.fixUp(self.heapsize-1)
    
    def fixUp(self,index):
        parentIndex = (index-1)//2
        if index > 0 and self.heapArray[index]>self.heapArray[parentIndex]:
            self.heapArray[index],self.heapArray[parentIndex] = self.heapArray[parentIndex],self.heapArray[index]
            self.fixUp(parentIndex)

    def getMax(self):
        return self.heapArray[0]

    def poll(self):
        maxi = self.getMax()
        h = self.heapsize - 1
        self.heapArray[0],self.heapArray[h] = self.heapArray[h],self.heapArray[0]
        self.heapsize = h

        self.fixDown(0)
        return maxi      

    def fixDown(self,index):
        leftIndex = (2 * index) + 1
        rightIndex = (2 * index) + 2
        largestIndex = index
        if leftIndex < self.heapsize and self.heapArray[leftIndex]>self.heapArray[index]:
            largestIndex = leftIndex

        if rightIndex < self.heapsize and self.heapArray[rightIndex]>self.heapArray[leftIndex]:
            largestIndex = rightIndex
        
        if index != largestIndex:
            self.heapArray[index],self.heapArray[largestIndex] = self.heapArray[largestIndex],self.heapArray[index]
            self.fixDown(largestIndex)


    def heap_sort(self):
        result = []
        while self.heapsize >0:
            result.append(self.poll())
        return result

h = heap(11)

h.insert(10)
h.insert(20)
h.insert(5)
h.insert(6)
h.insert(8)
h.insert(22)
h.insert(18)
h.insert(25)
h.insert(11)
h.insert(30)
h.insert(26)
print(h.heap_sort())


